import { Route, Routes } from "react-router-dom";

import Account from "./pages/settings/account";
import Auth from "./pages/auth";
import Chat from "./pages/messages/chat";
import Help from "./pages/settings/help";
import Home from "./pages/home";
import Messages from "./pages/messages";
import Notifications from "./pages/settings/notifications";
import Play from "./pages/play";
import Profile from "./pages/settings/profile";

function App() {
  return (
    <>
      <style>{`
      body {
        margin: 0;
      }
    `}</style>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/home" element={<Home />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/messages/chat/:id" element={<Chat />} />
        <Route path="/play" element={<Play />} />
        <Route path="/settings/profile" element={<Profile />} />
        <Route path="/settings/account" element={<Account />} />
        <Route path="/settings/notifications" element={<Notifications />} />
        <Route path="/settings/help" element={<Help />} />
        <Route path="*" element={<Auth />} />
      </Routes>
    </>
  );
}

export default App;
