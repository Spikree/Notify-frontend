import React, { useState } from 'react'
import './PasswordInput.css'
import { FaRegEye } from "react-icons/fa";

const PasswordInput = (props) => {

    const [showPassword,setShowPassword] = useState(false)

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

  return (
    <>
    <input className='password' value={props.value} onChange={props.onChange} type={showPassword ? 'text' : "password"} placeholder={props.placeholder || "password"}/>
    <label className={showPassword? '..' : "blue"} onClick={() => toggleShowPassword()} style={{fontSize:13}} htmlFor="">show password</label>
    </>
  )
}

export default PasswordInput