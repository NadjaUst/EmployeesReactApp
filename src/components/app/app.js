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
        { name: "John Smith", salary: 1800, increase: false, rise: true, id: 1 },
        { name: "Alex Mann", salary: 3000, increase: true, rise: false, id: 2 },
        { name: "James Bond", salary: 5000, increase: false, rise: false, id: 3 }
      ]
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
      //console.log(maxId)

      const newEmployee = {
        name,
        salary,
        increase: false,
        rise: false,
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


  // onToggleIncrease = (id) => {
  //   this.setState(({ employeesData }) => {

  //     const newEmployeesData = employeesData.map(item => {
  //       if (item.id === id) {
  //         return { ...item, increase: !item.increase }
  //       }
  //       return item
  //     })

  //     return {
  //       employeesData: newEmployeesData
  //     }
  //   })
  // }


  //   onToggleRise = (id) => {
  //     console.log("rised" + id)
  //   }


    render() {

      const totalNumber = this.state.employeesData.length;
      const increaseNumber = this.state.employeesData.filter(el => el.increase == true).length

      return (
        <div className="app">
          <AppInfo totalNumber={totalNumber} increaseNumber={increaseNumber}/>

          <div className="search-panel">
            <SearchPanel />
            <AppFilter />
          </div>

          <EmployeesList employees={this.state.employeesData}
            onDelete={this.deleteItem}
            onToggleLabel={this.onToggleLabel}


          />
          <EmployeesAddForm onAdd={this.addItem} />
        </div>
      )

    }
  }


export default App;
