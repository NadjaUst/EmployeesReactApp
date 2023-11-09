import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

const employeesData = [
            {name: "John Smith", salary: 1800, increase: false},
            {name: "Alex Mann", salary: 3000, increase: true},
            {name: "James Bond", salary: 5000, increase: false}
]

function App() {
  return (
    <div className="app">
        <AppInfo />

        <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>
        </div>
        
        <EmployeesList employees = {employeesData}/>
        <EmployeesAddForm/>
    </div>
  );
}

export default App;
