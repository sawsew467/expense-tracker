import React, { useEffect, useState } from "react";
import swal from 'sweetalert';
import "../assets/css/Adding.css";

function Adding(props) {
  const [historyTittle, setHistoryTittle] = useState("");
  const [historyValue, setHistoryValue] = useState("");
  const [historyList, setHistoryList] = useState(
    JSON.parse(localStorage.getItem("historyList")) ?? []
  );
  const [income, setIncome] = useState(
    JSON.parse(localStorage.getItem("income")) ?? 0
  );
  const [expense, setExpense] = useState(
    JSON.parse(localStorage.getItem("expense")) ?? 0
  );
  const sendData = () => {
    props.parentCallback(historyList);
    props.incomeCallback(income);
    props.expenseCallback(expense);
  };
  const handleTittle = (e) => {
    setHistoryTittle(e.target.value);
  };
  const handleValue = (e) => {
    setHistoryValue(e.target.value);
  };
  const handleSubmit = (historyValue) => {
    // console.log('historyValue: ', isNaN(historyValue));
    if (historyTittle === "" || historyValue === "") {
      swal("Please enter your information!");
    } else if (isNaN(historyValue) === true) {
      swal("The value must be a number!");
    } else {
      setHistoryList((prev) => {
        const newHistory = [
          {
            name: historyTittle,
            value: +historyValue,
          },
          ...prev,
        ];
        return newHistory;
      });
      historyValue > 0
        ? setIncome(income + +historyValue)
        : setExpense(expense - +historyValue);
      setHistoryTittle("");
      setHistoryValue("");
    }
  };
  useEffect(() => {
    localStorage.setItem("historyList", JSON.stringify(historyList));
    localStorage.setItem("income", JSON.stringify(income));
    localStorage.setItem("expense", JSON.stringify(expense));
    sendData();
  }, [historyList]);
  // send data
  return (
    <>
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
          onClick={() => handleSubmit(historyValue)}
        >
          Add transaction
        </button>
      </div>
    </>
  );
}

export default Adding;
