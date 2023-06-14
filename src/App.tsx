import { Route, Routes, HashRouter } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/home/Home";
import { Login } from "./pages/login/Login";
import { Tabla } from "./pages/Tabla.tsx/Tabla";
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/tabla" element={<Tabla />} />
      </Routes>
    </HashRouter>
  );
}
export default App;
