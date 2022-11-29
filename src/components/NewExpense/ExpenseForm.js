import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
    
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(e);
    }

    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");
    const titleChangeHandler = event => {
        setEnteredTitle(event.target.value);
    }
    const amountChangeHandler = event => {
        setEnteredAmount(event.target.value);
    }
    const dateChangeHandler = event => {
        setEnteredDate(event.target.value);
    }

    console.log(enteredTitle, enteredDate, enteredAmount)

    return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input name="title" type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default ExpenseForm;