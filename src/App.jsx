import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Login from './pages/login/Login'
import Home from './pages/home/Home'
import Signup from './pages/signup/Signup'

const App = () => {
  return (
    <div className='app'>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App