import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import "./styles/ExpensesItem.css";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("updated!");
    console.log("updated");
  };

  return (
    <Card className="expense-item">
      {/* start element */}
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">$ {props.amount}</div>
      </div>
      <button onClick={clickHandler}>Click fkng me</button>
      {/* end element */}
    </Card>
  );
}

export default ExpenseItem;
