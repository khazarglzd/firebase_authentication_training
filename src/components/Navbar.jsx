import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../css/Navbar.css"

const Navbar = () => {

    const navigate = useNavigate()

    return (
        <div className='navbar' >
            <div className='navbar-left' onClick={() => navigate("/auth")}>Firebase</div>
            <div className='navbar-right' >Log Out</div>
        </div>
    )
}

export default Navbar