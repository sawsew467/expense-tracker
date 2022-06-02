import React, { useEffect, useState } from "react";
import "../assets/css/Information.css";

function Information() {
  const [income, setIncome] = useState(
    JSON.parse(localStorage.getItem("income")) ?? 0
  );
  const [expense, setExpense] = useState(
    JSON.parse(localStorage.getItem("expense")) ?? 0
  );
  // console.log(income);
  return (
    <>
      <div className="app__balance">
        <p>Your balance</p>
        <span>${income - expense}</span>
      </div>
      <div className="card">
        <div className="card__item card__item--income">
          <p className="card__tittle">INCOME</p>
          <span className="card__value card__value--income">${income}</span>
        </div>
        <div className="card__item card__item--expense">
          <p className="card__tittle">EXPENSE</p>
          <span className="card__value card__value--expense">${expense}</span>
        </div>
      </div>
    </>
  );
}

export default Information;
