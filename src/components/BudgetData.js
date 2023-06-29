import Incomes from "./Incomes";
import Expenses from "./Expenses";

function BudgetData(data) {

    const incomes = data.data.filter(item => item.type === 'income');
    const expenses = data.data.filter(item => item.type === 'expense');

    return (
        <div className='container-fluid'>
            <div className='container margin-6'>
                <div className='row align-items-center'>
                    <div className='col-3 margin-right-4'>
                      <Incomes income={incomes}/>
                    </div>
                    <div className='col-3'>
                       <Expenses expense={expenses}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BudgetData;