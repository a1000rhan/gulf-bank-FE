import "./App.css";
import { Route, Routes } from "react-router-dom";
import SignUpModal from "./Componets/SignUpModal";
import SignInModal from "./Componets/SignInModal";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignUpModal />} />
      </Routes>
    </div>
  );
}

export default App;
