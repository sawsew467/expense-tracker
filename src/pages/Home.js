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
  const callbackHistory = (childData) => {
    setHistoryList(childData);
  };
  // console.log(historyList);
  return (
    <>
      <div className="wrapper">
        <div className="app">
          <h1 className="app__heading">Expense Tracker</h1>
          {/* <Information></Information> */}
          <History history={historyList}></History>
          <Adding parentCallback={callbackHistory}></Adding>
        </div>
      </div>
    </>
  );
}

export default Home;
