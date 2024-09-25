import { useState } from 'react'
import './index.css'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './pages/auth/signup'
import SignIn from './pages/auth/signin'
import Loading from './pages/loading'

function App() {

  return (
    <>
   <BrowserRouter>
   <Routes>
      <Route path='/' element={<Loading />} />
      <Route path='/SignUp' element={<SignUp />} />
      <Route path='/SignIn' element={<SignIn /> } />
   </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
