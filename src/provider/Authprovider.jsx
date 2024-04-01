import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/firebase";



export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider()

const Authprovider = ({children}) => {

    const [user, setUser] = useState(null)

    const [loading, setLoading] = useState(true);
   
    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
 
    const signInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const signInWithGoogle = () =>{
        return signInWithPopup(auth, googleProvider)
        setLoading(true)
    }

    const logOut = ()=>{
         setLoading(true)
         return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser =>{
            console.log(currentUser);
            setUser(currentUser)
            setLoading(false)
         })
         return ()=>{
            unSubscribe();
         }
    },[])

    const authinfo = {user,loading, createUser, signInUser,signInWithGoogle,logOut}

    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;

Authprovider.propTypes = {
    children: PropTypes.node
}

