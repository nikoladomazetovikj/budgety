import Button from "../UI/Button";

function Header({ clearData }) {

    const handleClearData = () => {
        if (window.confirm("Are you sure you want to clear the data?")) {
            clearData();
        }
    };

    return (
        <div className='container-fluid navbar-dark'>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-6'>
                        <h3 className='nav-title'>My Personal Budget</h3>
                    </div>
                    <div className='col-6 d-flex justify-content-end'>
                        <Button title='Clear Data' styles='button-secondary' onClick={handleClearData} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header