import React from 'react'
import "../css/Auth.css"


const Auth = () => {
    return (
        <div className='auth'>
            <h3 className='auth-header'>Sign In / Sign Up</h3>
            <div className='auth-inputs'>
                <input type="text" placeholder='Add email address...' />
                <input type="password" placeholder='Add password...' />
            </div>
            <div >
                <button className='sign-in-btn'>SIGN IN</button>
                <button className='sign-up-btn'>SIGN UP</button>
            </div>
        </div>
    )
}

export default Auth