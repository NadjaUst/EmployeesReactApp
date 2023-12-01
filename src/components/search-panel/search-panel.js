import { Component, Fragment } from 'react';
import './search-panel.css';

class SearchPanel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nameFIlter: ''
        }
    }

    onChange = (event) => {
        const nameFIlter = event.target.value;
        this.setState(({nameFIlter}));
        this.props.onUpdateSearch(nameFIlter);
    }

    render() {
        return (
            <input type="text"
            className="form-control search-input"
            placeholder="Find an employee"
            onChange = {this.onChange}
            />
        )

    }
          
}

export default SearchPanel;