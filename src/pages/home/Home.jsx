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
import moment from 'moment'

const Home = () => {

  const [openAddEditModal, setOpenAddEditModal] = useState({ isShown: false, type: "add", data: null })

  const [userInfo, setUseInfo] = useState(null);

  const [allNotes, setAllNotes] = useState([])

  const navigate = useNavigate();

  const handleEdit = (noteDetails) => {
    setOpenAddEditModal({isShown: true,data:noteDetails,type:"edit"})
  }

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
      const response = await axiosInstance.get("/get-all-notes");

      if(response.data && response.data.notes) {
        setAllNotes(response.data.notes)
      }
    } catch (error) {
      console.log("an unexprected error occoured");
    }
  }

  useEffect(() => {
    getAllNotes();
    getUserInfo();
    return () => {

    }
  }, [])


  return (
    <>
      <ToastContainer />
      <Navbar userInfo={userInfo} />

      <div className="note-cards">
        {allNotes.map((item,index) => (
          <NoteCard
          key={item._id}
          title={item.title}
          date={moment(item.createdOn).format('Do MMM YYYY')}
          content={item.content}
          tags={item.tags}
          isPinned={item.isPinned}
          onEdit={() => handleEdit(item)}
          onDelete={() => { }}
          onPinnedNote={() => { }}
        />
        ))}
        
      </div>

      <button className='add-button' onClick={() => {
        setOpenAddEditModal({ isShown: true, type: "add", data: null })
      }}>
        <MdAdd />
      </button>

      <div className='modal-div'>
        <Modal isOpen={openAddEditModal.isShown} onRequestClose={() => { }} style={{ overlay: { backgroundColor: "rgba(0,0,0,0.2)" } }} contentLabel="" className="modal">

          <EditNotes type={openAddEditModal.type} newNote={openAddEditModal.data} onClose={() => { setOpenAddEditModal({ isShown: false, type: "add", data: null }) }} getAllNotes={getAllNotes}/>

        </Modal>
      </div>
    </>
  )
}

export default Home