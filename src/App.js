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

    const calculateSummary = () => {
        let incomeSum = 0;
        let expenseSum = 0;

        budgetData.forEach(item => {
            const amount = parseInt(item.amount, 10); // Convert item.amount to an integer
            if (item.type === 'income') {
                incomeSum += amount;
            } else if (item.type === 'expense') {
                expenseSum += amount;
            }
        });

        const totalSum = expenseSum > incomeSum ? incomeSum - expenseSum : incomeSum + expenseSum;
        const incomePercentage = Math.round((incomeSum / totalSum) * 100);
        const expensePercentage = Math.round((expenseSum / totalSum) * 100);

        return {
            incomeSum,
            expenseSum,
            totalSum,
            incomePercentage,
            expensePercentage,
        };
    };

    const summary = calculateSummary();


    const clearData = () => {
        setBudgetData([]);
        localStorage.removeItem("budgetData");
    };

    return (
        <div>
            <Header clearData={clearData}/>
            <Budget month={currentMonth} year={currentYear} summary={summary}/>
            <BudgetData data={budgetData} onDelete={handleOnDelete}/>
        </div>
    );
}

export default App;
