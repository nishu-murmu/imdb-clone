import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";
import { LayoutProps } from "../utils/types";

const Protected = ({ children }: { children: JSX.Element }) => {
  const { currentUser } = useContext(AuthContext);
  if (!currentUser && !JSON.parse(localStorage.getItem('currentUser') || "null")) return <Navigate to="/signin" replace />;
  return children;
};
export default Protected;
