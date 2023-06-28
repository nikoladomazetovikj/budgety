function Budget(props) {

    return (
        <div className='margin-2 container-fluid'>
            <div className='container'>
              <div className='row'>
                  <h3 className='text-center'>Your Monthly Budget for {props.month} {props.year}</h3>
              </div>
                <div className='row margin-2'>
                   <div className='col-2'>
                       <h3 className='text-center'>Income</h3>
                       <h3 className='text-center'>Expenses</h3>
                   </div>
                    <div className='col-2'>
                        <h3 className='text-center'>Income</h3>
                        <h3 className='text-center'>Expenses</h3>
                    </div>
                    <div className='col-2'>
                        <h3 className='text-center'>Income</h3>
                        <h3 className='text-center'>Expenses</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Budget;