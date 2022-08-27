import { Route, Routes } from "react-router-dom";

import Auth from "./pages/auth";
import Home from "./pages/home";

function App() {
  return (
    <>
      <style>{`
      body {
        margin: 0;
        background-color: #F0F0F0
      }
    `}</style>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
