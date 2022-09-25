import { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../storage";
import { useLocation, useNavigate } from "react-router-dom";

type Props = {
  children: JSX.Element;
};

export const AuthContext = createContext<{
  token: string | null;
  onLogin: (token: string) => void;
} | null>(null);

export default function AuthProvider({ children }: Props) {
  const [token, setToken] = useState<string | null>(null);
  let navigate = useNavigate();
  let location = useLocation()

  useEffect(() => {
    const token = getLocalStorage("auth-token");

    if (token) {
      setToken(token);
      navigate(location.pathname);
    }
  }, [location.pathname, navigate]);

  const handleLogin = (token: string) => {
    setToken(token);
    setLocalStorage("auth-token", token);
    navigate("/home");
  };

  const value = {
    token,
    onLogin: handleLogin,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
