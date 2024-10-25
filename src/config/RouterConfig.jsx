import { Routes, Route } from 'react-router-dom'
import Auth from '../pages/Auth'
import Home from '../pages/Home'

const RouterConfig = () => {
    return (
        <Routes>
            <Route exact path='/' element={<Auth />} />
            <Route exact path='/home' element={<Home />} />
        </Routes>
    )
}

export default RouterConfig

