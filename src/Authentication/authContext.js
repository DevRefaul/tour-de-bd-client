import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, GithubAuthProvider, signInWithEmailAndPassword, signOut, sendPasswordResetEmail, onAuthStateChanged, updateProfile } from 'firebase/auth'
import app from "../Firebase/firebase";

const auth = getAuth(app)
export const AuthConext = createContext()

// google auth provider
const googleAuthProvider = new GoogleAuthProvider()

// facebook auth provider
const facebookAuthProvider = new FacebookAuthProvider()

// github auth provider
const githubAuthProvider = new GithubAuthProvider()



// main function
const Authentication = ({ children }) => {
    // user state
    const [user, setUser] = useState('')
    const [loading, setLoading] = useState(true)


    // google sing in
    const handleGoogleSingIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleAuthProvider)
    }
    // facebook sing in
    const handleFacebookSingIn = () => {
        setLoading(true)
        return signInWithPopup(auth, facebookAuthProvider)
    }
    // github sing in
    const handleGithubSingIn = () => {
        setLoading(true)
        return signInWithPopup(auth, githubAuthProvider)
    }

    // create user with email and password
    const handleCreateUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // sign in with email and password
    const handleLogIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // password reset 
    const handleResetPass = (email) => {
        setLoading(true)
        return sendPasswordResetEmail(auth, email)
    }

    // sign out
    const handleSignOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    // update user profile
    const handleUpdateProfile = (name, photo) => {
        return updateProfile(auth.currentUser, { displayName: name, photoURL: photo })
    }


    // onauthstatechanged
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => unsubscribe()
    }, [])

    const contextValues = {
        handleCreateUser, handleGoogleSingIn, handleFacebookSingIn, handleGithubSingIn, handleLogIn, handleSignOut, handleResetPass, user, loading, setLoading, handleUpdateProfile
    }

    return (
        <AuthConext.Provider value={contextValues}>
            {children}
        </AuthConext.Provider>
    )
}

export default Authentication