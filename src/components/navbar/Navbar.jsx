import React, { useEffect, useState } from 'react'
import './Navbar.css'
import ProfileInfo from '../cards/ProfileInfo'
import { useNavigate } from 'react-router-dom'
import SearchBar from '../search bar/SearchBar'

const Navbar = (props) => {

  const [searchQuery, setSearchQuery] = useState("")
  const navigate = useNavigate();

  const onLogout = () => {
    localStorage.clear();
    navigate("/");
  }

  const handleSearch = () => {
    props.onSearchNote(searchQuery)
  }

  const onClearSearch = () => {
    setSearchQuery("")
    props.handleClearSearch();
  }


//   useEffect(() => {
//     if(!searchQuery) {
//       props.handleClearSearch();
//     }
// }, [searchQuery]);


  return (
    <div className='navbar'>
        
        <div className="navbar-header">
        <h2>Notify</h2>
        </div>

        {props.searchBar && <SearchBar value={searchQuery} onChange={({target}) => {
          setSearchQuery(target.value)
        }} handleSearch={handleSearch} onClearSearch={onClearSearch}/>}

        <ProfileInfo isLoggedIn={props.isLoggedIn} userInfo={props.userInfo} onLogout={onLogout}/>
    </div>
  )
}

export default Navbar