import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../Authentication/firebase.init';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth/cordova';
import { useEffect } from 'react';
import { useState } from 'react';

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    console.log(user);
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    const signOutUser=()=>{
        return signOut(auth)
    }
     useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,currentUser=>{
            console.log("Current User inside useEffect on auth state changes",currentUser)
            setUser(currentUser);
        })
        return ()=>{
            unSubscribe();
        }

     },[])
    const userInfo={
        user,
        createUser,
        signInUser,
        signOutUser
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;