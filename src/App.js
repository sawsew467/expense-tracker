import { Route, Routes } from "react-router";
import Home from "./pages/Home.js";
import Login from "./pages/Login.js";
import Register from "./pages/Register";
import "./assets/css/reset.css"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login></Login>}/>
        <Route path="/Home" element={<Home></Home>} />
        <Route path="/login" element= {<Login></Login>} />
        <Route path="/register" element={<Register></Register>}/>
      </Routes>
    </>
  );
}

export default App;
