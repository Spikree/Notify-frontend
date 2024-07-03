import React from 'react'
import './Home.css'
import Navbar from '../../components/navbar/Navbar'
import NoteCard from '../../components/note card/NoteCard'

const Home = () => {
  return (
    <>
    <Navbar/>

    <div className="note-cards">
      <NoteCard/>
    </div>
    </>
  )
}

export default Home