import { Route, Routes } from "react-router-dom";

import Auth from "./pages/auth";
import Home from "./pages/home";
import Messages from "./pages/messages";
import Play from "./pages/play";

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
        <Route path="/messages" element={<Messages />} />
        <Route path="/play" element={<Play />} />
      </Routes>
    </>
  );
}

export default App;
