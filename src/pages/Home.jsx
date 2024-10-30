import React, { useEffect, useState } from 'react'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../Firebase';

const Home = () => {

    const [user, setUser] = useState("")

    useEffect(() => {
        onAuthStateChanged(auth, (userCredential) => {
            if (userCredential) {
                setUser(userCredential.email)
            }
        })
    }, [])

    return (
        <h2>Welcome {user}</h2>
    )
}

export default Home