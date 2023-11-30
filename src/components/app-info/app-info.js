import "./app-info.css";

const AppInfo = (props) => {

    const {totalNumber, increaseNumber} = props;

    return (
        <div className="app-info">
            <h1>Information about UST company employees</h1>
            <h2>Total number of employees: {totalNumber}</h2>
            <h2>Will receive a bonus: {increaseNumber}</h2>


        </div>
    )
}

export default AppInfo;