import { useAuth } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

export default function RedirectIfAdmin({ children }) {
  const { user } = useAuth();
  if (user?.role === "ADMIN") {
    return <Navigate to="/admin" />;
  }
  return children;
}
