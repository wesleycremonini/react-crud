import React, { useContext, useState, useEffect } from 'react';
import { auth } from '../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail, updateEmail, updatePassword, updateProfile } from 'firebase/auth';


const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    function signup(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
        // TROCAR FUNCTION PRA DATABASE Q TO USANDO
    }

    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
        // TROCAR FUNCTION PRA DATABASE Q TO USANDO
    }

    function logout() {
        return signOut(auth);
        // TROCAR FUNCTION PRA DATABASE Q TO USANDO
    }

    function resetPassword(email) {
        return sendPasswordResetEmail(auth, email);
        // TROCAR FUNCTION PRA DATABASE Q TO USANDO
    }

    function upEmail(email) {
        return updateEmail(currentUser, email)
        // TROCAR FUNCTION PRA DATABASE Q TO USANDO
    };

    function upPassword(password) {
        return updatePassword(currentUser, password)
        // TROCAR FUNCTION PRA DATABASE Q TO USANDO
    }

    function upProfile(name, URL) {
        return updateProfile(currentUser, name, URL)
        // TROCAR FUNCTION PRA DATABASE Q TO USANDO
    }


    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false);
        })

        return unsubscribe
    }, [])
    

    const value = {
        currentUser,
        signup,
        login,
        logout,
        resetPassword,
        upEmail,
        upPassword,
        upProfile
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
