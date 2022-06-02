// <h1>Allah is the Greatest</h1>

import ExpenseItem from "./components/ExpenseItem";
import "./App.css";

function App() {
  const expense = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.6,
      date: new Date(2022, 5, 1),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2022, 4, 24) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2022, 6, 1),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2022, 3, 12),
    },
  ];
  return (
    <div>
      <h1>Let's get Started!</h1>
      <ExpenseItem title={expense[0].title} amount={expense[0].amount} date={expense[0].date}></ExpenseItem>
      <ExpenseItem title={expense[1].title} amount={expense[1].amount} date={expense[1].date}></ExpenseItem>
      <ExpenseItem title={expense[2].title} amount={expense[2].amount} date={expense[2].date}></ExpenseItem>
      <ExpenseItem title={expense[3].title} amount={expense[3].amount} date={expense[3].date}></ExpenseItem>
    </div>
  );
}

export default App;
