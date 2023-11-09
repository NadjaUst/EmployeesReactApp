import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({employees}) => {

    const employeesList = employees.map( (item) => {
        return (
            <EmployeesListItem {...item}/>
        )

    })

    return (
        <ul className="app-list list-group">
            {employeesList}
        </ul>
    )
}

export default EmployeesList;