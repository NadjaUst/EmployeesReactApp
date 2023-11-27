import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({employees}) => {

    const employeesList = employees.map( (item) => {
        const {id, ...itemProps} = item;
        
        return (
            <EmployeesListItem key={id} {...item}/>
        )

    })

    return (
        <ul className="app-list list-group">
            {employeesList}
        </ul>
    )
}

export default EmployeesList;