import { createContext } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, GithubAuthProvider } from 'firebase/auth'
import app from "../Firebase/firebase";

const auth = getAuth(app)
export const AuthConext = createContext()

// google auth provider
const googleAuthProvider = new GoogleAuthProvider()

// facebook auth provider
const facebookAuthProvider = new FacebookAuthProvider()

// github auth provider
const githubAuthProvider = new GithubAuthProvider()

const Authentication = ({ children }) => {
    // google sing in
    const handleGoogleSingIn = () => {
        return signInWithPopup(auth, googleAuthProvider)
    }
    // facebook sing in
    const handleFacebookSingIn = () => {
        return signInWithPopup(auth, facebookAuthProvider)
    }
    // github sing in
    const handleGithubSingIn = () => {
        return signInWithPopup(auth, githubAuthProvider)
    }

    // create user with email and password
    const handleCreateUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }



    const contextValues = {
        handleCreateUser, handleGoogleSingIn, handleFacebookSingIn, handleGithubSingIn
    }

    return (
        <AuthConext.Provider value={contextValues}>
            {children}
        </AuthConext.Provider>
    )
}

export default Authentication