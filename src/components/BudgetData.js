import Incomes from "./Incomes";
import Expenses from "./Expenses";

function BudgetData() {
    return (
        <div className='container-fluid'>
            <div className='container margin-6'>
                <div className='row align-items-center'>
                    <div className='col-3 margin-right-4'>
                      <Incomes/>
                    </div>
                    <div className='col-3'>
                       <Expenses/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BudgetData;