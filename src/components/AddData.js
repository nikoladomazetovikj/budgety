import Button from "../UI/Button";
import {useState} from "react";

function AddData() {

    const [budget, setBudget] = useState({ type: 'income', details: '', amount: 0 });

    const handleTypeChange = (event) => {
        setBudget({ ...budget, type: event.target.value });
    };

    const handleDetailsChange = (event) => {
        setBudget({ ...budget, details: event.target.value });
    };

    const handleAmountChange = (event) => {
        setBudget({ ...budget, amount: event.target.value });
    };

    const handleOnSubmit = (event) =>  {

        if (budget.details.trim() === '') {
            alert('Please enter the details.');
            return;
        }

        if (budget.amount <= 0 ) {
            alert('Please enter a valid amount.');
            return;
        }
        const id = crypto.randomUUID();
        const budgetObject = { id, ...budget };

        const existingBudgetData = localStorage.getItem('budgetData');
        const parsedExistingData = existingBudgetData ? JSON.parse(existingBudgetData) : [];

        const updatedData = [...parsedExistingData, budgetObject];

        localStorage.setItem('budgetData', JSON.stringify(updatedData));

        // Reset the form fields
        setBudget({ type: 'income', details: '', amount: 0 });
    }

    return (
        <form className="add-data-form" onSubmit={handleOnSubmit}>
            <select className="add-data-select" onChange={handleTypeChange}>
                <option value="income">Income</option>
                <option value="expense">Expense</option>
            </select>
            <input type="text" className="add-data-input" placeholder="Enter details"  value={budget.details} onChange={handleDetailsChange} />
            <input type="number" className="add-data-input" placeholder="Enter amount"  value={budget.amount} onChange={handleAmountChange}/>
            <Button type="submit" styles="add-data-button" title="Add"/>
        </form>
    );
}

export default AddData;