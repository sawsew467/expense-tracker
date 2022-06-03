import React, { useEffect, useState } from "react";
import "../assets/css/Information.css";

function Information(props) {
  console.log(props);
  return (
    <>
      <div className="app__balance">
        <p>Your balance</p>
        <span>${props.income - props.expense}</span>
      </div>
      <div className="card">
        <div className="card__item card__item--income">
          <p className="card__tittle">INCOME</p>
          <span className="card__value card__value--income">${props.income}</span>
        </div>
        <div className="card__item card__item--expense">
          <p className="card__tittle">EXPENSE</p>
          <span className="card__value card__value--expense">${props.expense}</span>
        </div>
      </div>
    </>
  );
}

export default Information;
