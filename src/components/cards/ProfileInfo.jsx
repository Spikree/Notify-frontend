import React from 'react'
import './ProfileInfo.css'
import { getInitials } from '../../validate/validate'

const ProfileInfo = (props) => {
    return (
        <div className='profile-info'>
            <div className='user-profile'>
                {getInitials("Avi mahalingpure")}
            </div>

            <div className='user-info'>
                <p>Avi Mahalingpure</p>
                <button onClick={props.onLogout}>Logout</button>
            </div>
        </div>
    )
}

export default ProfileInfo