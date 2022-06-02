import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";
import "./assets/css/reset.css"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login></Login>}/>
        <Route path="/Home" element={<Home></Home>} />
        <Route path="/login" element= {<Login></Login>}></Route>
      </Routes>
    </>
  );
}

export default App;
