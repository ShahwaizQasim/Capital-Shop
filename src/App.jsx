import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import './App.css'
import Navbar from './components/navbar'
import Signup from './auth/signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Navbar />
   <h3>Welcome to 
   Home Page</h3>
   <Signup />
    </>
  )
}

export default App
