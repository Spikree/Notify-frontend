import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Login from './pages/login/Login'
import Home from './pages/home/Home'
import Signup from './pages/signup/Signup'
import Modal from 'react-modal'

const App = () => {
  Modal.setAppElement('#root');
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App