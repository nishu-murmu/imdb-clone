import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../utils/contexts/authContext";
import useLocaleStorage from "../utils/customHooks/useLocaleStorage";
import { LayoutProps } from "../utils/types";

const Protected = ({ children }: { children: JSX.Element }) => {
    const { currentUser } = useContext(AuthContext);
    const { getLocaleStorage } = useLocaleStorage()
    if (!currentUser && !getLocaleStorage("currentUser")) return <Navigate to="/signin" replace />;
    return children;
};
export default Protected;
