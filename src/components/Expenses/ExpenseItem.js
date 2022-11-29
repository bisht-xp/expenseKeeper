import {useState} from "react"
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

// const expenseDate = new Date().toISOString;
// const expenseTitle = "Car Insurance";
// const expenseAmount = 295.67;
function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title)
  const clickHandler = ()=> {
    setTitle("Update!");
    // console.log(title);
  }
  setTimeout(() => {
    clickHandler();
  }, 3000);

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>update</button>
    </Card>
  );
}

export default ExpenseItem;
