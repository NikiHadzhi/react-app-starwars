import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const AuthContext = createContext();

export const AuthProvider = ({
    children
}) => {
    const [auth, setAuth] = useLocalStorage('user', {});

    const userLogin = (userData) => {
        setAuth(userData);
    }

    const userLogout = () => {
        setAuth({});
    }

    return (
        <AuthContext.Provider value=
            {{
                user: auth,
                userLogin,
                userLogout,
                isAuthenticated: Boolean(auth.accessToken)
            }}>
            {children}
        </AuthContext.Provider>
    )
}