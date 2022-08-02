import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({
    children
}) => {
    const [auth, setAuth] = useState({});

    const userLogin = (userData) => {
        localStorage.setItem('user', JSON.stringify(userData));
		setAuth(userData);
	}

    const userLogout = () => {
		localStorage.removeItem('user');
		setAuth({});
	}

    return (
        <AuthContext.Provider value={{ user: auth, userLogin, userLogout }}>
            {children}
        </AuthContext.Provider>
    )
}