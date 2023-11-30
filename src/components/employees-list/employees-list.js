import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({employees, onDelete, onToggleLabel}) => {

    const employeesList = employees.map( (item) => {
        const {id, ...itemProps} = item;
        
        return (
            <EmployeesListItem 
                key={id} 
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleLabel={(event)=>onToggleLabel(id, event.currentTarget.getAttribute('data-label'))}
                />
        )

    })

    return (
        <ul className="app-list list-group">
            {employeesList}
        </ul>
    )
}

export default EmployeesList;