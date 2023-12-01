import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      employeesData: [
        { name: "John Smith", salary: 1800, bonus: false, promotion: true, id: 1 },
        { name: "Alex Mann", salary: 3000, bonus: true, promotion: false, id: 2 },
        { name: "James Bond", salary: 800, bonus: false, promotion: false, id: 3 },
        { name: "Alexandr Bond", salary: 3000, bonus: false, promotion: false, id: 4 },
        { name: "Peter Smith", salary: 500, bonus: false, promotion: false, id: 5 }
      ],
      nameFilter: '',
      labelFilter: 'all'
    }
  }

  deleteItem = (id) => {
    this.setState(({ employeesData }) => {

      const newEmployeesData = employeesData.filter(el => el.id !== id);

      return {
        employeesData: newEmployeesData
      }

    })
  }

  addItem = (name, salary) => {

    this.setState(({ employeesData }) => {

      const maxId = employeesData.reduce((prev, current) => prev.id > current.id ? prev : current, {}).id;

      const newEmployee = {
        name,
        salary,
        bonus: false,
        promotion: false,
        id: maxId + 1
      }

      const newEmployeesData = [...employeesData, newEmployee]

      return {
        employeesData: newEmployeesData
      }
    })
  }

  onToggleLabel = (id, label) => {
    this.setState(({ employeesData }) => {

      const newEmployeesData = employeesData.map(item => {
        if (item.id === id) {
          return { ...item, [label]: !item[label] }
        }
        return item
      })

      return {
        employeesData: newEmployeesData
      }
    })
  }

  searchEmployee = (items, nameFilter) => {
    if (nameFilter.length === 0) {
      return items;
    }

    return items.filter(item => {
      return item.name.indexOf(nameFilter) > -1
    })
  }

  onUpdateSearch = (nameFilter) => {
    this.setState({ nameFilter });
  }

  filterEmployee = (items, labelFilter) => {
    switch (labelFilter) {
      case 'promotion':
        return items.filter(item => item.promotion);
      case 'more1000':
        return items.filter(item => item.salary > 1000);
      default:
        return items
    }
  }

  onFilterSelect = (labelFilter) => {
    this.setState({ labelFilter });
  }

  render() {

    const { employeesData, nameFilter, labelFilter } = this.state;

    const totalNumber = employeesData.length;
    const bonusNumber = employeesData.filter(el => el.bonus == true).length

    const visibleData = this.filterEmployee(this.searchEmployee(employeesData, nameFilter), labelFilter);

    return (
      <div className="app">
        <AppInfo totalNumber={totalNumber} bonusNumber={bonusNumber} />

        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter filter={labelFilter} onFilterSelect={this.onFilterSelect} />
        </div>

        <EmployeesList employees={visibleData}
          onDelete={this.deleteItem}
          onToggleLabel={this.onToggleLabel}


        />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    )

  }
}


export default App;
