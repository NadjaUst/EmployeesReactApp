import './employees-add-form.css';
import { Component } from 'react';

class EmployeesAddForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "",
            salary: 0
        }

    }

    onValueChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    onAdd = (event) => {
        event.preventDefault();
        if (this.state.name !== "" && this.state.name.length >= 3 && this.state.salary > 0) {
            this.props.onAdd(this.state.name, this.state.salary);
            this.setState({
                name: "",
                salary: 0
            }
            )
        } else alert("Please enter a name of at least 3 characters and salary")

    }

    render() {

        const { name, salary } = this.state;

        return (
            <div className="app-add-form">
                <h3>Add a new employee</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onAdd}>
                    <input type="text"
                        onChange={this.onValueChange}
                        className="form-control new-post-label"
                        name="name"
                        value={name}
                        placeholder="Name" />
                    <input type="number"
                        onChange={this.onValueChange}
                        className="form-control new-post-label"
                        name="salary"
                        value={salary}
                        placeholder="Salary" />
                    <button type="submit"
                        className="btn btn-outline-light">Add</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;