import React from 'react'
import './SearchBar.css'
import { FaSearch } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const SearchBar = (props) => {
  return (
    <div className='search-bar'>
        <input type="text" placeholder='Search Notes'value={props.value} onChange={props.onChange} />
        {props.value &&<IoMdClose className='icon' onClick={props.onClearSearch}/>}
        <FaSearch onClick={props.handleSearch} className='icon' />
    </div>
  )
}

export default SearchBar