import React, { useState } from 'react'
import './EditNotes.css'
import TagsInput from '../tags input/TagsInput'
import { MdClose } from 'react-icons/md';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditNotes = (props) => {

  const [title,setTitle] = useState("");
  const [content,setContent] = useState("");
  const [tags,setTags] = useState([]);

  // Add note

  const addNewNote = async () => {
    
  }

  // Edit note

  const editNote = async () => {

  }

  const handleAddNote = () => {
    if(!title) {
      toast.error("Title is required")
      return
    }

    if(!content) {
      toast.error("content is required")
      return
    }

    if(props.type === 'edit') {
      editNote();
    } else {
      addNewNote();
    }
  }

  return (
    <div className='edit-notes'>
      <ToastContainer/>
      <div className='close'>
      <MdClose onClick={props.onClose}  />
      </div>
      <div className='edit-notes-inner-div'>
        <label htmlFor="">TITLE</label>
        <input type="text" placeholder='Go to the gym at 5' value={title} onChange={({target}) => setTitle(target.value)} />
      </div>

      <div className='edit-notes-inner-div'>
        <label htmlFor="">CONTENT</label>
        <textarea name="" id="" placeholder='content' rows={10} value={content} onChange={({target}) => setContent(target.value)} />
      </div>

      <div className='edit-notes-inner-div'>
        <label htmlFor="">Tags</label>
        <TagsInput tags={tags} setTags={setTags}/>
      </div>

      <button className='edit-notes-button' onClick={handleAddNote}>ADD</button>
    </div>
  )
}

export default EditNotes