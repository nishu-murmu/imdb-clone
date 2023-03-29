import { useContext } from "react";
import { AuthContextProps } from "../utils/types";


const AuthContext = useContext<AuthContextProps>({
    currentUser: '',
    login: () => {},
    logout: () => {},
    signup: () => {},
    setCurrentUser: () => {},
})
const AuthProvider = () => {

    const value = {
        currentUser,
        login,
        logout,
        register
    }
    return (
        <AuthContext.Provider value={value}>
            
        </AuthContext.Provider>
    )
}
export default AuthContext;