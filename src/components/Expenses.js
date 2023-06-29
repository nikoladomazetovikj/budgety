import Button from "../UI/Button";

function Expenses(props) {
    return (
        <div className="list-container">
            <h5 className='text-danger'>Expenses</h5>
            <ul className="item-list">
                {props.expense.map(item =>  <li className="list-item" key={item.id}>
                    <span>{item.details} - {item.amount}</span>
                    <Button title='X' styles='button-secondary'/>
                </li>)}
            </ul>
        </div>
    );
}

export default Expenses;