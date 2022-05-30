import React from "react";
import { useState, useEffect } from "react";
import { Alert } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import "./reset.css";
import "./style.css";

function App() {
  const [historyList, setHistoryList] = useState([]);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [historyTittle, setHistoryTittle] = useState("");
  const [historyValue, setHistoryValue] = useState("");
  const [historyItem, setHistoryItem] = useState({});
  const [balanceValue, setBalanceValue] = [income - expense];
  const [isChecked, setIsChecked] = useState(true);
  const [isHollow, setIsHollow] = useState(false);
  const handleTittle = (e) => {
    setHistoryTittle(e.target.value);
  };
  const handleValue = (e) => {
    setHistoryValue(e.target.value);
  };
  const handleSubmit = (historyList) => {
    if (historyTittle === "" || historyValue === "") {
      setIsHollow(true);
    } else {
      const hhistoryValue = parseInt(historyValue);
      if (hhistoryValue) {
        console.log(hhistoryValue);
        const newValue = +historyValue;
        setHistoryList((prev) => {
          const newHistory = [
            {
              name: historyTittle,
              value: newValue,
            },
            ...prev,
          ];
          return newHistory;
        });
        historyValue > 0
          ? setIncome(income + newValue)
          : setExpense(expense - newValue);
        setHistoryTittle("");
        setHistoryValue("");
        setIsChecked(true);
      } else {
        setHistoryTittle("");
        setHistoryValue("");
        setIsChecked(false);
      }
    }
    setIsHollow(false);
  };
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
  return (
    <div className="wrapper">
      {isChecked === false && (
        <Alert severity="error" className="alert--err">
          The amount must be a number!
        </Alert>
      )}
      {isHollow === true && (
        <Alert severity="error" className="alert--err">
          Please enter information!
        </Alert>
      )}
      <div className="app">
        <h1 className="app__heading">Expense Tracker</h1>
        <div className="app__balance">
          <p>Your balance</p>
          <span>${balanceValue}</span>
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
        <div className="history">
          <div className="history__tittle">History</div>
          <hr></hr>
          <ul className="history__list">
            {historyList.map((item, index) => (
              <li
                key={index}
                className={
                  item.value >= 0
                    ? "history__item history__item--income"
                    : "history__item history__item--expense"
                }
              >
                <p className="history__name">{item.name}</p>
                <span className="history__value">
                  {item.value > 0 ? "+" + item.value : item.value}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="addding">
          <div className="adding__heading">Add new transaction</div>
          <hr></hr>
          <div className="adding__item">
            <label className="adding__lable">Text</label>
            <input
              className="adding__input"
              type="text"
              placeholder="Enter text..."
              onChange={(e) => handleTittle(e)}
              value={historyTittle}
            ></input>
          </div>
          <div className="adding__item">
            <label className="adding__lable">
              Amount <br></br> (negative - expense, postive - income)
            </label>
            <input
              className="adding__input"
              type="text"
              placeholder="Enter text..."
              onChange={(e) => handleValue(e)}
              value={historyValue}
            ></input>
          </div>
          <button
            className="adding__submit"
            onClick={() => handleSubmit(historyList)}
          >
            Add transaction
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
