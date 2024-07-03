import React, { useState } from 'react'
import './Login.css'
import Navbar from '../../components/navbar/Navbar'
import { Link } from 'react-router-dom'
import PasswordInput from '../../components/password input/PasswordInput'
import { validateEmail } from '../../validate/validate'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

  const [email , setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      toast.error("Enter a valid email");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }
  }

  return (
    <div className='login'>
      <ToastContainer />
      <Navbar/>

    <div className="login-box-parent">
      <div className="login-box">
        <form onSubmit={handleLogin}>
        <h4>Login</h4>

        <div className="inputs">
        <label htmlFor="">Email</label>
        <input value={email} onChange={(e) => {setEmail(e.target.value)}} type="text" placeholder='Email' />

        <label htmlFor="">password</label>
        <PasswordInput value={password} onChange={(e) => {setPassword(e.target.value)}}/>
        </div>

        <button type='submit'>Login</button>

        <p>Not registered yet? <Link to={"/signup"}>Create an account</Link></p>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Login