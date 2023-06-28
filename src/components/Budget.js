import Card from "../UI/Card";

function Budget(props) {

    return (
        <div className='margin-2 container-fluid'>
            <div className='container'>
              <div className='row'>
                  <h3 className='text-center'>Your Monthly Budget for {props.month} {props.year}</h3>
              </div>
                <div className='row margin-4'>
                   <div className='col-2 d-flex justify-content-center'>
                      <Card cardColor='card-incomes' cardTitle='Income'/>
                   </div>
                    <div className='col-2 d-flex justify-content-center'>
                      <Card cardColor='card-total' cardTitle='Total'/>
                    </div>
                    <div className='col-2 d-flex justify-content-center'>
                       <Card cardColor='card-expenses' cardTitle='Expenses'/>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Budget;