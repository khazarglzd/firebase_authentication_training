import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import "../css/Auth.css"
import { toast } from 'react-toastify';
import { auth } from '../Firebase';


const Auth = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signUp = async () => {
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password)
            const user = response.user
            if (user) {
                toast.success("The user created")
                setEmail('')
                setPassword("")
            }
        }
        catch (error) {
            toast.error(error.message)
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
                <button className='sign-in-btn'>Sign In</button>
                <button className='sign-up-btn' onClick={signUp} >Sign Up</button>
                <button className='sign-in-google-btn'>Sign in with Google </button>
            </div>
        </div>
    )
}

export default Auth