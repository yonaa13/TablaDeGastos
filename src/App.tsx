import { Route, Routes, HashRouter } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/home/Home";
import { Login } from "./pages/login/Login";
import { Tabla } from "./pages/Tabla.tsx/Tabla";
import { ContextProvider } from "./context/ContextProvider";
function App() {
  return (
    <ContextProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/tabla" element={<Tabla />} />
        </Routes>
      </HashRouter>
    </ContextProvider>
  );
}
export default App;
