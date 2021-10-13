import ExpenseDate from "./ExpenseDate";
import "./styles/ExpensesItem.css";

function ExpenseItem(props) {
  //   const expenseDate = new Date(2021, 2, 28);
  //   const expenseTitle = "Healthcare";
  //   const expenseAmount = 294.67;

  return (
    <div className="expense-item">
      {/* start element */}
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">$ {props.amount}</div>
      </div>

      {/* end element */}
    </div>
  );
}

export default ExpenseItem;
