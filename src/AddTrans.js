import React, { useState } from 'react';

function AddTrans (){

    let [descr, setDescr] = useState([{Description: '', Amount: ''}]);
   
 

    const addTrans = (e) => {
        const result = {
            Description: 'gas Bill',
            Amount: 200,
        }
        setDescr([...descr, result]);
    };


    

    return(
        <div class='row'>
            
            <div class='col-sm'>
                <div class=' container'>
                    <p>Transaction History</p>
                    <hr />
                    <div class=' container'>
                        <div>
                        {descr.map((result, index)=>{
                            return(
                                <div key={index}>
                                    <p>{result.Description} - {result.Amount}</p>
                                </div>
                            )
                        })}
                        </div>
                    </div>
                </div>
            </div>
            <div class='col-sm'>
                <div class=' container'>
                    <p>Add Transaction</p>
                    <hr />
                        <label>
                            Description
                        </label>
                        <br />
                        <input type="text"   />
                        <br/>
                        <label>
                            Transaction Amount
                        </label>
                        <br/>
                        <input type="text"   />
                        <br />
                        < button class='btn btn-info mt-3' onClick = {addTrans} >Add</ button>
                   
                </div>
            </div>
        </div>
    
    )
}
export default AddTrans;