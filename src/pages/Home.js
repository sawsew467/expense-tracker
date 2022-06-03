import React, { useEffect, useState } from "react";
import { Alert } from "@mui/material";
import Information from "../components/Information";
import History from "../components/History";
import Adding from "../components/Adding";
import "../assets/css/home.css";
import "../assets/css/Adding.css";
// import Adding from "../components/Adding";

function Home() {
  const [historyList, setHistoryList] = useState([]);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const callbackHistory = (childData) => {
    setHistoryList(childData);
  };
  const callbackIncome = (childData) => {
    setIncome(childData);
  };
  const callbackExpense = (childData) => {
    setExpense(childData);
  };
  // console.log(historyList);
  return (
    <>
      <div className="wrapper">
        <div className="app">
          <h1 className="app__heading">Expense Tracker</h1>
          <Information
            history={historyList}
            income={income}
            expense={expense}
          ></Information>
          <History history={historyList}></History>
          <Adding
            parentCallback={callbackHistory}
            incomeCallback={callbackIncome}
            expenseCallback={callbackExpense}
          ></Adding>
        </div>
      </div>
    </>
  );
}

export default Home;
