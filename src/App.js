import Header from "./layouts/Header";
import Budget from "./components/Budget";
import BudgetData from "./components/BudgetData";
import {useEffect, useState} from "react";

function App() {
    const currentDate = new Date();
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const currentMonth = months[currentDate.getMonth()];
    const currentYear = currentDate.getFullYear();

    const [budgetData, setBudgetData] = useState([]);

    useEffect(() => {
        const existingBudgetData = localStorage.getItem('budgetData');
        const parsedExistingData = existingBudgetData ? JSON.parse(existingBudgetData) : [];
        setBudgetData(parsedExistingData);
    }, []);

    return (
        <div>
            <Header/>
            <Budget month={currentMonth} year={currentYear}/>
            <BudgetData data={budgetData}/>
        </div>
    );
}

export default App;
