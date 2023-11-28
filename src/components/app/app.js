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
        { name: "John Smith", salary: 1800, increase: false, id: 1 },
        { name: "Alex Mann", salary: 3000, increase: true, id: 2 },
        { name: "James Bond", salary: 5000, increase: false, id: 3 }
      ]
    }
  }

  deleteItem = (id) => {
    this.setState(({ employeesData }) => {

      return {
        employeesData: employeesData.filter(el => el.id !== id)
      }

    })
  }

  addItem = (name, salary) => {



    this.setState(({ employeesData }) => {
      
      const maxId = employeesData.reduce((prev, current) => prev.b > current.b ? prev : current, {}).id;
      //console.log(maxId)
      
      const newEmployee = {
        name,
        salary,
        increase: false,
        id: maxId+1
      }
      
      const newEmployeesData = [...employeesData, newEmployee]
      

      return {
        employeesData: newEmployeesData
      }
    })
  }

  render() {
    return (
      <div className="app">
        <AppInfo />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>

        <EmployeesList employees={this.state.employeesData}
          onDelete={this.deleteItem}
        />
        <EmployeesAddForm onAdd={this.addItem}/>
      </div>
    )

  }
}


export default App;
