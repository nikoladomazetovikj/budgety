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
        const lastDayOfMonth = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth() + 1,
            0
        );
        const timeDifference = lastDayOfMonth.getTime() - currentDate.getTime();

        const timeout = setTimeout(() => {
            localStorage.removeItem("budgetData");
        }, timeDifference);

        return () => clearTimeout(timeout);
    }, []);


    useEffect(() => {
        const existingBudgetData = localStorage.getItem('budgetData');
        const parsedExistingData = existingBudgetData ? JSON.parse(existingBudgetData) : [];
        setBudgetData(parsedExistingData);
    }, []);

    const handleOnDelete = (id) => {
        setBudgetData(prevData => {
            const updatedData = prevData.filter(item => item.id !== id);
            localStorage.setItem("budgetData", JSON.stringify(updatedData));
            return updatedData;
        });
    };


    return (
        <div>
            <Header/>
            <Budget month={currentMonth} year={currentYear}/>
            <BudgetData data={budgetData} onDelete={handleOnDelete}/>
        </div>
    );
}

export default App;
