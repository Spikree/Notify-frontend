import React, { useState } from 'react'
import './EditNotes.css'
import TagsInput from '../tags input/TagsInput'
import { MdClose } from 'react-icons/md';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import axiosInstance from '../../validate/axiosInstance';

const EditNotes = (props) => {

  const [title, setTitle] = useState(props.newNote ? props.newNote.title : '');
  const [content, setContent] = useState(props.newNote ? props.newNote.content : '');
  const [tags, setTags] = useState(props.newNote ? props.newNote.tags : []);


  useEffect(() => {
    if (props.newNote) {
      setTitle(props.newNote.title || '');
      setContent(props.newNote.content || '');
      setTags(props.newNote.tags || []);
    }
  }, [props.newNote]);

  // Add note

  const addNewNote = async () => {
    try {
      const response = await axiosInstance.post("/add-note", {
        title,
        content,
        tags
      })

      if (response.data && response.data.note) {
        props.getAllNotes();
        props.onClose();
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message)
      }
    }
  }

  // Edit note
    const editNote = async () => {
      try {
        const response = await axiosInstance.put(`/edit-note/${props.newNote._id}`, {
          title,
          content,
          tags,
        });
        if (response.status === 200){
          props.getAllNotes();
          props.onClose();
          toast.success("Note updated successfully");
        }else{
          toast.error(response.data.message || "An error occurred while updating the note.");
      }
    } catch (error) {
      console.error("Error updating note:", error);
      toast.error(error.response?.data?.message || "An error occurred while updating the note.");
    }
  };
  

  const handleAddNote = () => {
    if (!title) {
      toast.error("Title is required")
      return
    }

    if (!content) {
      toast.error("content is required")
      return
    }

    if (props.type === 'edit') {
      editNote();
    } else {
      addNewNote();
    }
  }

  return (
    <div className='edit-notes'>
      <ToastContainer />
      <div className='close'>
        <MdClose onClick={props.onClose} />
      </div>
      <div className='edit-notes-inner-div'>
        <label htmlFor="">TITLE</label>
        <input type="text" placeholder='Go to the gym at 5' value={title} onChange={({ target }) => setTitle(target.value)} />
      </div>

      <div className='edit-notes-inner-div'>
        <label htmlFor="">CONTENT</label>
        <textarea name="" id="" placeholder='content' rows={10} value={content} onChange={({ target }) => setContent(target.value)} />
      </div>

      <div className='edit-notes-inner-div'>
        <label htmlFor="">Tags</label>
        <TagsInput tags={tags} setTags={setTags} />
      </div>

      <button className='edit-notes-button' onClick={handleAddNote}>{props.type === 'edit' ? 'UPDATE' :'Add'}</button>
    </div>
  )
}

export default EditNotes