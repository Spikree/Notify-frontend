import React, { useState, useEffect } from 'react'
import './ProfileInfo.css'
import { getInitials } from '../../validate/validate.js'
import axiosInstance from '../../validate/axiosInstance.js'
import { useLocation } from 'react-router-dom'

const ProfileInfo = (props) => {

    const location = useLocation();
    const [fullName, setFullName ] = useState("loading...")
    const [isError, setIsError] = useState(true);

    useEffect(() => {
        if (location.pathname === '/home') {
            const getUserInfo = async () => {
                try {
                    const response = await axiosInstance.get("/get-user");
                    if (response.data && response.data.user) {
                        setFullName(response.data.user.fullName);
                        setIsError(!isError)
                    }
                } catch (error) {
                    if (error) {
                        setIsError(true);
                    }
                }
            };
            getUserInfo();
        }
    }, [location]); 

    if(isError) {
        return null;
    }

    return (
        <div className='profile-info'>
            <div className='user-profile'>
                {getInitials(fullName)}
            </div>

            <div className='user-info'>
                <p>{fullName}</p>
                <button onClick={props.onLogout}>Logout</button>
            </div>
        </div>
    )
}

export default ProfileInfo