import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../css/Navbar.css"
import { auth } from "../Firebase"
import { signOut } from 'firebase/auth'
import { toast } from 'react-toastify'

const Navbar = () => {

    const navigate = useNavigate()

    const logOut = () => {
        toast.success("Logging Out");
        setTimeout(() => {
            signOut(auth)
            navigate("/auth")
        }, 2000);
    }

    return (
        <div className='navbar' >
            <div className='navbar-left' onClick={() => navigate("/auth")}>Firebase</div>
            <div className='navbar-right' onClick={logOut} >Log Out</div>
        </div>
    )
}

export default Navbar