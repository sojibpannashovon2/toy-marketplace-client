import React,
{ createContext, useEffect, useState } from 'react';
import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut, updateProfile
} from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app)

const provider = new GoogleAuthProvider();

const AuthProvider2 = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log('Current User', currentUser);
            setLoading(false)

        })
        return () => {
            return unsubcribe;
        }
    }, [])

    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (user, name, photo) => {
        setLoading(true)
        return updateProfile(user, {
            displayName: name,
            photoURL: photo

        })


    }

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)

    }

    const authInfo = {
        user,
        logOut,
        loading,
        createUser,
        updateUserProfile,
        logIn,
        googleSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider2;