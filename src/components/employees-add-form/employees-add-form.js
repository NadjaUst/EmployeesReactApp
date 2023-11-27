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
        // this.setState(({ ...prevState }) => ({
        //     ...prevState,
        //     [name]: value
        // }))
        this.setState({
            [name]: value
        })
        //console.log(this.state)
    }

    // addEmployee = (event) => {

    // }

    render() {

        const {name, salary} = this.state;

        return (
            <div className="app-add-form">
                <h3>Add a new employee</h3>
                <form 
                    className="add-form d-flex">
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
                        className="btn btn-outline-light"
                        >Add</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;