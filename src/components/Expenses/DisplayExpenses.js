import Card from "../UI/Card";
import "./DisplayExpenses.css";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const DisplayExpenses = (props) => {
  const [year, setYear] = useState("2020");

  const selectedYearHandle = (expectedYear) => {
    setYear(expectedYear);
    console.log(year);
  };

  const filteredExpenses = props.items.filter((expenses) => {
    return expenses.date.getFullYear().toString() === year;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onSelectYear={selectedYearHandle} initValue={year} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default DisplayExpenses;
