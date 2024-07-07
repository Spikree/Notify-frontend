import React, { useEffect, useState } from 'react'
import './Home.css'
import Navbar from '../../components/navbar/Navbar'
import NoteCard from '../../components/note card/NoteCard'
import EditNotes from '../../components/edit notes/EditNotes.jsx'
import { MdAdd } from 'react-icons/md'
import Modal from 'react-modal'
import { ToastContainer } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../../validate/axiosInstance.js'

const Home = () => {

  const [openAddEditModal, setOpenAddEditModal] = useState({ isShown: false, type: "add", data: null })

  const [userInfo, setUseInfo] = useState(null);

  const navigate = useNavigate();

  // get user info
  const getUserInfo = async () => {
    try {
      const response = await axiosInstance.get("/get-user")
      if (response.data && response.data.user) {
        setUseInfo(response.data.user);
      }
    } catch (error) {
      if (error.response.status === 401) {
        localStorage.clear();
        navigate("/login")
      }
    }
  }

  // get all notes
  const getAllNotes = async () => {
    try {
      const response = await axiosInstance.get("/get-all-notes")
    } catch (error) {
      
    }
  }

  useEffect(() => {
    getUserInfo();
    return () => {

    }
  }, [])


  return (
    <>
      <ToastContainer />
      <Navbar userInfo={userInfo} />

      <div className="note-cards">
        <NoteCard
          title="Meeting on 7th april"
          date="3rd april 2024"
          content="Meeting on 7th april Meeting on 7th april"
          tags="#Meeting"
          isPinned={true}
          onEdit={() => { }}
          onDelete={() => { }}
          onPinnedNote={() => { }}
        />
      </div>

      <button className='add-button' onClick={() => {
        setOpenAddEditModal({ isShown: true, type: "add", data: null })
      }}>
        <MdAdd />
      </button>

      <div className='modal-div'>
        <Modal isOpen={openAddEditModal.isShown} onRequestClose={() => { }} style={{ overlay: { backgroundColor: "rgba(0,0,0,0.2)" } }} contentLabel="" className="modal">

          <EditNotes type={openAddEditModal.type} newNote={openAddEditModal.data} onClose={() => { setOpenAddEditModal({ isShown: false, type: "add", data: null }) }} />

        </Modal>
      </div>
    </>
  )
}

export default Home