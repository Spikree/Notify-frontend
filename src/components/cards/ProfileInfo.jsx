import React from 'react'
import './ProfileInfo.css'
import { getInitials } from '../../validate/validate.js'

const ProfileInfo = (props) => {

    if (!props.userInfo || !props.userInfo.fullName) {
        return null; 
    }

    return (
        <div className='profile-info'>
            <div className='user-profile'>
                {getInitials(props.userInfo.fullName)}
            </div>

            <div className='user-info'>
                <p>{props.userInfo.fullName}</p>
                <button onClick={props.onLogout}>Logout</button>
            </div>
        </div>
    )
}

export default ProfileInfo