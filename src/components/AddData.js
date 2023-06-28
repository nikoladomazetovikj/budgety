function AddData() {
    return (
        <form className="add-data-form">
            <select className="add-data-select">
                <option value="income">Income</option>
                <option value="expense">Expense</option>
            </select>
            <input type="text" className="add-data-input" placeholder="Enter details" />
            <input type="number" className="add-data-input" placeholder="Enter amount" />
            <button type="button" className="add-data-button">Add</button>
        </form>
    );
}

export default AddData;