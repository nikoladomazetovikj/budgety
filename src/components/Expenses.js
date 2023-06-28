import Button from "../UI/Button";

function Expenses() {
    return (
        <div className="list-container">
            <h5 className='text-danger'>Expenses</h5>
            <ul className="item-list">
                <li className="list-item">
                    <span>Details</span>
                    <Button title='X' styles='button-secondary'/>
                </li>
            </ul>
        </div>
    );
}

export default Expenses;