import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router-dom";
import { useContext } from "react";

type Props = {
  children: JSX.Element;
};

export default function ProtectedRoute({ children }: Props) {
  const auth = useContext(AuthContext);

  if (!auth?.token) {
    return <Navigate to="/auth" replace />;
  }

  return children;
}
