import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import AddTrans from './AddTrans';

function App() {
  // let [debit, setDebit] = useState(0);
  // let [credit, setCredit] = useState(0);
  return (
      <div className='container-fluid '>
        <div className='container'>
           <nav class="navbar bg-info text-white justify-content-center">
             <h1>Expense Tracker</h1>
            </nav>
        </div>
        <div className='container jumbotron text-secondary mt-5'>
         <div class='row'>
            <div class='col-sm justify-content-center'>
              <div class=' container'>
                 <p >CURRENT BALANCE</p>
                 <hr />
                 <h2 class='text-dark'>$ 0.0</h2>
              </div>
            </div>
            <div class='col-sm justify-content-center'>
              <div class=' container'>
                 <div class='row'>
                 <div class=' col'>
                   <p>INCOME</p>
                   <hr />
                    {/* <h2 class='text-success' >$ {debit}</h2> */}
                  </div>
                  <div class=' col'>
                   <p>EXPENSE</p>
                   <hr />
                  {/* <h2 class='text-danger'>$ {credit}</h2> */}
                  </div>
                 </div>

              </div>
            </div>
          </div>
        </div>
        <div className='container jumbotron  text-secondary mt-5'>
            <AddTrans />
        </div>   
    </div>
      
  )  
}

export default App;
