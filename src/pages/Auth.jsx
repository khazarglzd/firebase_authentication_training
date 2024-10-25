import React, { useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import "../css/Auth.css"
import { toast } from 'react-toastify';
import { auth } from '../Firebase';
import { useNavigate } from 'react-router-dom';

const provider = new GoogleAuthProvider();


const Auth = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const signInWithGoogle = async () => {
        try {
            const response = await signInWithPopup(auth, provider)
            // const credential = GoogleAuthProvider.credentialFromResult(response);
            // const token = credential.accessToken;
            const user = response.user
            if (user) {
                navigate("/home")
            }
        }
        catch (error) {
            toast.error(error.message)
        }

    }

    const signUp = async () => {
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password)
            const user = response.user

            if (user) {
                toast.success("The user created")
                setEmail('')
                setPassword("")
                navigate("/home")
            }
        }
        catch (error) {
            toast.error(error.message)
        };

    }

    const signIn = async () => {
        try {
            const response = await signInWithEmailAndPassword(auth, email, password)
            const user = response.user
            if (user) {
                navigate("/home")
            }
        }
        catch (error) {
            toast.error("Sign In process failed" + error.message)
        };

    }



    return (
        <div className='auth'>
            <h3 className='auth-header'>Sign In / Sign Up</h3>
            <div className='auth-inputs'>
                <input type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder='Add email address...' />
                <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder='Add password...' />
            </div>
            <div className='auth-btn-div' >
                <button className='sign-in-btn' onClick={signIn} >Sign In</button>
                <button className='sign-up-btn' onClick={signUp} >Sign Up</button>
                <button className='sign-in-google-btn' onClick={signInWithGoogle}   >Sign in with Google </button>
            </div>
        </div>
    )
}

export default Auth