import Header from "./layouts/Header";
import Budget from "./components/Budget";
import BudgetData from "./components/BudgetData";
import {useState} from "react";

function App() {
    const currentDate = new Date();
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const currentMonth = months[currentDate.getMonth()];
    const currentYear = currentDate.getFullYear();

    return (
        <div>
            <Header/>
            <Budget month={currentMonth} year={currentYear}/>
            <BudgetData/>
        </div>
    );
}

export default App;
