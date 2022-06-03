import React, { useState } from "react";

import './ExpenseForm.css';

const ExpenseForm =() => {

const [enteredTitle, setEnterTitle] = useState('');
const [enteredAmount, setEnterAmount] = useState('');
const [enteredDate, setEnterDate] = useState('');

const titleChangeHandler = (event) => {
    setEnterTitle(event.target.value);
};
const amountChangeHandler =(event) => {
    setEnterAmount(event.target.value);
};
const dateChangehandler = (event) => {
    setEnterDate(event.target.value);
};

const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
        title: enteredTitle,
        amount: enteredAmount,
        date: new Date(enteredDate)
    }
    console.log(expenseData);
    setEnterTitle('');
    setEnterAmount('');
    setEnterDate('');
};
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label> 
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={enteredDate} onChange={dateChangehandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;