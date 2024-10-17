import './App.css'
import Navbar from './components/Navbar'
import RouterConfig from "./config/RouterConfig"
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

const App = () => {
  return (
    <div className='container' >
      <Navbar />
      <RouterConfig />
      <ToastContainer position='top-right' autoClose={2000} />
    </div>
  )
}

export default App