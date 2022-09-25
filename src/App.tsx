import { Route, Routes } from "react-router-dom";

import Account from "./pages/settings/account";
import Auth from "./pages/auth";
import AuthProvider from "./services/providers/AuthProvider";
import Chat from "./pages/messages/chat";
import Help from "./pages/settings/help";
import Home from "./pages/home";
import Messages from "./pages/messages";
import Notifications from "./pages/settings/notifications";
import Play from "./pages/play";
import Profile from "./pages/settings/profile";
import ProtectedRoute from "./services/providers/ProtectedRoute";

function App() {
  return (
    <>
      <style>{`
      body {
        margin: 0;
      }
    `}</style>
      <AuthProvider>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/messages"
            element={
              <ProtectedRoute>
                <Messages />
              </ProtectedRoute>
            }
          />
          <Route
            path="/messages/chat/:id"
            element={
              <ProtectedRoute>
                <Chat />
              </ProtectedRoute>
            }
          />
          <Route
            path="/play"
            element={
              <ProtectedRoute>
                <Play />
              </ProtectedRoute>
            }
          />
          <Route
            path="/settings/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/settings/account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
          <Route
            path="/settings/notifications"
            element={
              <ProtectedRoute>
                <Notifications />
              </ProtectedRoute>
            }
          />
          <Route
            path="/settings/help"
            element={
              <ProtectedRoute>
                <Help />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Auth />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
