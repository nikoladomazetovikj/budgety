import Button from "../UI/Button";

function Incomes() {
    return (
        <div className="list-container">
            <h5 className='text-success'>Incomes</h5>
            <ul className="item-list">
                    <li className="list-item">
                        <span>Details</span>
                        <Button title='X' styles='button-secondary'/>
                    </li>
            </ul>
        </div>
    );
}

export default Incomes;