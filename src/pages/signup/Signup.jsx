import React, { useState } from 'react'
import './Signup.css'
import Navbar from '../../components/navbar/Navbar.jsx'
import { ToastContainer, toast } from 'react-toastify';
import { validateEmail } from '../../validate/validate'
import 'react-toastify/dist/ReactToastify.css';
import PasswordInput from '../../components/password input/PasswordInput.jsx';
import { Link } from 'react-router-dom';

const Signup = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    if(!name) {
      toast.error("Please enter your name")
    }

    if (!validateEmail(email)) {
      toast.error("Enter a valid email");
      return;
    }

    if (password.length < 6) {
      toast.error("password must be atleast 6 characters");
      return;
    }
  }

  return (
    <>
      <div className='signup'>
        <ToastContainer />
        <Navbar />

        <div className="signup-box-parent">
          <div className="signup-box">
            <form onSubmit={handleSignup}>
              <h4>SignUp</h4>

              <div className="inputs">
                <label htmlFor="">name</label>
                <input value={name} onChange={(e) => { setName(e.target.value) }} type="text" placeholder='name' />

                <label htmlFor="">Email</label>
                <input value={email} onChange={(e) => { setEmail(e.target.value) }} type="text" placeholder='email' />

                <label htmlFor="">password</label>
                <PasswordInput value={password} onChange={(e) => { setPassword(e.target.value) }} />
              </div>

              <button type='submit'>create account</button>

              <p>Already have an account? <Link to={"/login"}>Login here</Link></p>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup