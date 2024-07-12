import React, { useEffect, useState } from 'react'
import './Home.css'
import Navbar from '../../components/navbar/Navbar'
import NoteCard from '../../components/note card/NoteCard'
import EditNotes from '../../components/edit notes/EditNotes.jsx'
import { MdAdd } from 'react-icons/md'
import Modal from 'react-modal'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../../validate/axiosInstance.js'
import moment from 'moment'
import EmptyCard from '../../components/emptyCard/EmptyCard.jsx'

const Home = () => {

  const [openAddEditModal, setOpenAddEditModal] = useState({ isShown: false, type: "add", data: null })

  const [userInfo, setUseInfo] = useState(null);

  const [allNotes, setAllNotes] = useState([])

  const [searchBar, setSearchBar] = useState(false);

  const [search, setIsSearch] = useState(false)

  const navigate = useNavigate();


  // handles the edit button function
  const handleEdit = (noteDetails) => {
    setOpenAddEditModal({isShown: true,data:noteDetails,type:"edit"})
  }


  // get user info
  const getUserInfo = async () => {
    try {
      const response = await axiosInstance.get("/get-user")
      if (response.data && response.data.user) {
        setSearchBar(!searchBar);
        setUseInfo(response.data.user);
      }
    } catch (error) {
      if (error.response.status === 401) {
        localStorage.clear();
        navigate("/")
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

  // Delete note
  const deleteNote = async (data) => {
    try {
      const response = await axiosInstance.delete(`/delete-note/${data._id}`);
      if (response.status === 200){
        getAllNotes();
        toast.success("Note deleted successfully");
      }else{
        toast.error(response.data.message || "An error occurred while deleting the note.");
    }
  } catch (error) {
    console.error("Error updating note:", error);
    toast.error(error.response?.data?.message || "An error occurred while updating the note.");
  }
  }

  // search for a note 
  const onSearchNote = async(query) => {
    try {
      const response = await axiosInstance.get("/search-notes",{
        params: { query },
      });

      if (response.data && response.data.notes) {
        setIsSearch(true)
        setAllNotes(response.data.notes);
      }
    } catch (error) {
      console.log(error)
    }
  }

  const updateIsPinned = async(noteData) => {

  }

  const handleClearSearch = () => {
    setIsSearch(false)
    getAllNotes();

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
      <Navbar searchBar={searchBar} userInfo={userInfo} onSearchNote={onSearchNote} handleClearSearch={handleClearSearch} />

      {allNotes.length > 0 ? <div className="note-cards">
        {allNotes.map((item,index) => (
          <NoteCard
          key={item._id}
          title={item.title}
          date={moment(item.createdOn).format('Do MMM YYYY')}
          content={item.content}
          tags={item.tags}
          isPinned={item.isPinned}
          onEdit={() => handleEdit(item)}
          onDelete={() => deleteNote(item)}
          onPinnedNote={() => { }}
        />
        ))}
        
      </div> : <EmptyCard/>}

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