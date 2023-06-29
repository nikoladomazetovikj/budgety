import Button from "../UI/Button";

function Expenses(props) {
    const handleDelete = (id) => {
        props.onDelete(id);
    };

    return (
        <div className="list-container">
            <h5 className='text-danger'>Expenses</h5>
            <ul className="item-list">
                {props.expense.map(item => (
                    <li className="list-item" key={item.id}>
                        <span>{item.details} - {item.amount}</span>
                        <Button title='X' styles='button-secondary' onClick={() => handleDelete(item.id)} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Expenses;