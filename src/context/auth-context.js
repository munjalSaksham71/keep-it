import { createContext, useContext, useState, useEffect } from "react";
import {
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    onAuthStateChanged, 
    signOut
} from 'firebase/auth'
import { auth } from '../firebase/config'

const AuthContext = createContext();

const useAuth = () => useContext(AuthContext);

const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState({});

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => {
            unsubscribe();
        }
    }, [])

    const login = (email,password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        return signOut(auth);
    }

    return <AuthContext.Provider value={{user, login, signUp, logout}}>{children}</AuthContext.Provider>
}

export {AuthContextProvider, useAuth}