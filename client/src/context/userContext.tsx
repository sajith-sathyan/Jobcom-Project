    import React, { createContext, useState, ReactNode } from "react";

    interface User {
    userName:string,
    email:string,
    userId:string,
    }

    export interface UserContextType {
    user: User | null;
    login: (userData: User) => void;
    logout: () => void;
    }

    export const UserContext = createContext<UserContextType | null>(null);

    interface UserProviderProps {
    children: ReactNode;
    }

    export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    const login = (userData: User) => {
        setUser(userData);
        console.log("userData---->",userData)
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <UserContext.Provider value={{ user, login, logout }}>
        {children}
        </UserContext.Provider>
    );
    };
