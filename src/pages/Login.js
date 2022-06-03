import React, { useEffect, useState } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import swal from 'sweetalert';
import "../assets/css/Login.css";

function Login() {
  const [users, setUsers] = useState(JSON.parse(localStorage.getItem("users")) ?? []);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [ischecked, setIsChecked] = useState(false);
  const navigate = useNavigate();
  const handleUsername = (e) => {
    setUsername(e.target.value);
  }
  const handlePassword = (e) => {
    setPassword(e.target.value);
  }
  const handleSubmit = () => {
    let isPassed = false;;
    for (let user of users) {
      if (username === user.username && password === user.password) {
        setIsChecked(true);
        isPassed = true;
      }
    }
    if (isPassed === false) {
      alert("Wrong username or password!");
    }
    setUsername('');
    setPassword('');
  };

  useEffect(() => {
    ischecked && navigate("/home") 
  },);
  return (
    <>
      <div className="wrapper">
        <div className="login">
          <h1 className="login__title">Login to Expense Tracker</h1>
          <input
            type="text"
            className="login__input"
            placeholder="Username..."
            onChange={(e) => handleUsername(e)}
            value={username}
          ></input>
          <input
            type="password"
            className="login__input"
            placeholder="Password..."
            onChange={(e) => handlePassword(e)}
            value={password}
          ></input>
          <button className="login__button" onClick={handleSubmit}>
            Login
          </button>
          <p>
            Don't have an account? <Link to="/register">Sign up</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
