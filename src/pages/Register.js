import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from 'sweetalert';
import "../assets/css/Register.css";

function Register() {
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) ?? []
  );
  const [username, setUsername] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [account, setAccount] = useState({});
  const navigate = useNavigate();
  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword1 = (e) => {
    setPassword1(e.target.value);
  };
  const handlePassword2 = (e) => {
    setPassword2(e.target.value);
  };
  const handleSubmit = () => {
    if (password1 === password2) {
      setAccount({
        username: username,
        password: password1,
      });
      // navigate("/login");
      alert("Sign up account successfully!!!");
    } else {
      alert("Opp, something wasn't right!!!");
      setPassword1("");
      setPassword2("");
    }
  };
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);
  useEffect(() => {
    if (password1 === password2 && password1 !== "") {
      setUsers((prev) => {
        const newUsers = [account, ...prev];
        return newUsers;
      });
      setUsername("");
      setPassword1("");
      setPassword2("");
    }
  }, [account]);
  return (
    <div className="wrapper">
      <div className="register">
        <h1 className="register__title">Sign up</h1>
        <input
          type="text"
          className="register__input"
          placeholder="Username..."
          onChange={(e) => handleUsername(e)}
          value={username}
        ></input>
        <input
          type="password"
          className="register__input"
          placeholder="Password..."
          onChange={(e) => handlePassword1(e)}
          value={password1}
        ></input>
        <input
          type="password"
          className="register__input"
          placeholder="Confirm your password..."
          onChange={(e) => handlePassword2(e)}
          value={password2}
        ></input>
        <button className="register__button" onClick={handleSubmit}>
          register
        </button>
        <p>
          Do you have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
