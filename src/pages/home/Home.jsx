import React, { useState } from 'react'
import './Home.css'
import Navbar from '../../components/navbar/Navbar'
import NoteCard from '../../components/note card/NoteCard'
import EditNotes from '../../components/edit notes/EditNotes.jsx'
import { MdAdd } from 'react-icons/md'
import Modal from 'react-modal'
import { ToastContainer } from 'react-toastify'

const Home = () => {

  const [openAddEditModal,setOpenAddEditModal] = useState({isShown: false,type:"add", data: null })

  return (
    <>
    <ToastContainer/>
    <Navbar/>

    <div className="note-cards">
      <NoteCard
        title="Meeting on 7th april" 
        date="3rd april 2024" 
        content="Meeting on 7th april Meeting on 7th april"
        tags="#Meeting"
        isPinned={true}
        onEdit={()=>{}}
        onDelete={()=>{}}
        onPinnedNote={()=>{}}
        />
    </div>

    <button className='add-button' onClick={() => {
      setOpenAddEditModal({isShown:true,type:"add",data:null})
    }}>
    <MdAdd/>
    </button>

    <div className='modal-div'>
    <Modal isOpen={openAddEditModal.isShown} onRequestClose={() => {}} style={{overlay: {backgroundColor:"rgba(0,0,0,0.2)"}}} contentLabel=""className="modal">

    <EditNotes type={openAddEditModal.type} newNote={openAddEditModal.data} onClose={() => {setOpenAddEditModal({isShown : false, type:"add", data: null})}}/>

    </Modal>
    </div>
    </>
  )
}

export default Home