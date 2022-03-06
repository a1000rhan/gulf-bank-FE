import "./App.css";
import Home from "./components/Home";
import { Route, Routes } from "react-router";
import NavBar from "./components/NavBar";
import Account from "./components/Account";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/account"} element={<Account />} />
        <Route path={"/Dashboard"} element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
