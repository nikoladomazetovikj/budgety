import Button from "../UI/Button";

function AddData() {
    return (
        <form className="add-data-form">
            <select className="add-data-select">
                <option value="income">Income</option>
                <option value="expense">Expense</option>
            </select>
            <input type="text" className="add-data-input" placeholder="Enter details" />
            <input type="number" className="add-data-input" placeholder="Enter amount" />
            <Button type="button" styles="add-data-button" title="Add"/>
        </form>
    );
}

export default AddData;