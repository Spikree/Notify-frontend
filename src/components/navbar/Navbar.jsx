import React, { useState } from 'react'
import './Navbar.css'
import ProfileInfo from '../cards/ProfileInfo'
import { useNavigate } from 'react-router-dom'
import SearchBar from '../search bar/SearchBar'

const Navbar = (props) => {

  const [searchQuery, setSearchQuery] = useState("")
  const navigate = useNavigate();

  const onLogout = () => {
    localStorage.clear();
    navigate("/login");
  }

  const handleSearch = () => {

  }

  const onClearSearch = () => {
    setSearchQuery("")
  }

  return (
    <div className='navbar'>
        <h2>Notify</h2>

        <SearchBar value={searchQuery} onChange={({target}) => {
          setSearchQuery(target.value)
        }} handleSearch={handleSearch} onClearSearch={onClearSearch}/>

        <ProfileInfo userInfo={props.userInfo} onLogout={onLogout}/>
    </div>
  )
}

export default Navbar