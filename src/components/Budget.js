import Card from "../UI/Card";
import AddData from "./AddData";

function Budget(props) {

    console.log(props.summary)
    return (
        <>
        <div className='margin-2 container-fluid'>
            <div className='container'>
              <div className='row'>
                  <h2 className='text-center'>Your Monthly Budget for {props.month} {props.year}</h2>
              </div>
                <div className='row margin-4'>
                   <div className='col-2 d-flex justify-content-center'>
                      <Card cardColor='card-incomes' cardTitle='Incomes' sum={props.summary.incomeSum} percentage={props.summary.incomePercentage}/>
                   </div>
                    <div className='col-2 d-flex justify-content-center'>
                      <Card cardColor='card-total' cardTitle='Total' sum={props.summary.totalSum} />
                    </div>
                    <div className='col-2 d-flex justify-content-center'>
                       <Card cardColor='card-expenses' cardTitle='Expenses' sum={props.summary.expenseSum} percentage={props.summary.expensePercentage}/>
                    </div>
                </div>
            </div>
        </div>
            <div className='container-fluid empty-container padding-4'>
                <AddData/>
            </div>
        </>
    );
}


export default Budget;