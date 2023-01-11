import React, { useState,useEffect } from 'react';
import axios from 'axios';
import MiddleWrapper from './../layout/MiddleWrapper'; 
const DaybookAdd = () => {
    const [dateOfExpense, setDateOfExpense] = useState('');
    const [amountOfExpense, setAmountOfExpense] = useState('');
    const [nameOfExpense, setNameOfExpense] = useState('');
    const [typeOfExpense, setTypeOfExpense] = useState('');
    const [detailOfExpense, setDetailOfExpense] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        const daybook = {
            dateOfExpense: dateOfExpense,
            amountOfExpense: amountOfExpense,
            nameOfExpense: nameOfExpense,
            typeOfExpense: typeOfExpense,
            detailOfExpense: detailOfExpense
        };
        console.log(daybook);
        axios.post('http://localhost:4000/daybook/add', daybook)
        .then((response) => { 
          console.log("done");
        })
        .catch(err => {
            console.log(err);
        });
       
    }

    
     const clearForm = () => {
            setDateOfExpense('');
            setAmountOfExpense('');
            setNameOfExpense('');
            setTypeOfExpense('');
            setDetailOfExpense('');
        }

    
    return (
        <MiddleWrapper heading={"Add Expenses"}>
            <section className="content">
                <div className="container-fluid">
                    <div className="card card-default">
                        <div className="card-body">
                            <form onSubmit={onSubmit}>
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="exampleInputPassword1">Date Of Expense</label>
                                        <input type="text" value={dateOfExpense} onChange={(e) => { setDateOfExpense(e.target.value) }} className="form-control"/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="exampleInputPassword1">Amount Of Expense</label>
                                        <input type="text" value={amountOfExpense} onChange={(e) => { setAmountOfExpense(e.target.value) }} className="form-control"/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="exampleInputPassword1">Name Of Expense</label>
                                        <input type="text" value={nameOfExpense} onChange={(e) => { setNameOfExpense(e.target.value) }} className="form-control"/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="exampleInputPassword1">Type Of Expense</label>
                                        <input type="text" value={typeOfExpense} onChange={(e) => { setTypeOfExpense(e.target.value) }} className="form-control"/>
                                    </div>  
                                    <div className="form-group col-md-6">
                                        <label htmlFor="exampleInputPassword1">Detail Of Expense</label>
                                        <input type="text" value={detailOfExpense} onChange={(e) => { setDetailOfExpense(e.target.value) }} className="form-control"/>
                                    </div>    
                                        
                                       
                                </div>
                                    <div className="row">
                                        <button type="submit" className="btn btn-success submit_button">Submit</button>
                                    </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </MiddleWrapper>
    );
}

export default DaybookAdd;





