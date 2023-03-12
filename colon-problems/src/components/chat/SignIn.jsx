import React from 'react'
import GoogleButton from 'react-google-button'
import "C:/Users/Yash Thakar/PROGRAMMING/WebDev/React/Colon-Problems_LOC5.0/colon-problems/src/App.css"

import {auth} from '../firebase'
import {GoogleAuthProvider, signInWithRedirect} from 'firebase/auth'

const style = {
    wrapper: `flex justify-center`
}

const googleSignIn = () => {
    const provider = new GoogleAuthProvider()
    signInWithRedirect(auth, provider)
}

const SignIn = () => {
  return (
    <div className={style.wrapper}>
        <GoogleButton onClick={googleSignIn} />
    </div>
  )
}

export default SignIn