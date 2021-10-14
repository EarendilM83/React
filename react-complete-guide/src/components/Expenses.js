import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
function Expenses(props) {
  return (
    <Card className="expenses">
      <ExpenseItem
        title={props.itemsprob[0].title}
        amount={props.itemsprob[0].amount}
        date={props.itemsprob[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.itemsprob[1].title}
        amount={props.itemsprob[1].amount}
        date={props.itemsprob[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.itemsprob[2].title}
        amount={props.itemsprob[2].amount}
        date={props.itemsprob[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.itemsprob[3].title}
        amount={props.itemsprob[3].amount}
        date={props.itemsprob[3].date}
      ></ExpenseItem>
    </Card>
  );
}

export default Expenses;
