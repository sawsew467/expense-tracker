import React, { useEffect, useState } from 'react';
import "../assets/css/History.css"

function History({history}) {
  const historyList = history;
  return (
    <>
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
    </>
  )
}

export default History