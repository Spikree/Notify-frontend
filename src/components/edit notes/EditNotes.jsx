import React, { useState } from 'react'
import './EditNotes.css'
import TagsInput from '../tags input/TagsInput'

const EditNotes = () => {

  const [title,setTitle] = useState("");
  const [content,setContent] = useState("");
  const [tags,setTags] = useState([]);

  return (
    <div className='edit-notes'>
      <div>
        <label htmlFor="">TITLE</label>
        <input type="text" placeholder='Go to the gym at 5' value={title} onChange={({target}) => setTitle(target.value)} />
      </div>

      <div>
        <label htmlFor="">CONTENT</label>
        <textarea name="" id="" placeholder='content' rows={10} value={title} onChange={({target}) => setContent(target.value)} />
      </div>

      <div>
        <label htmlFor="">Tags</label>
        <TagsInput tags={tags} setTags={setTags}/>
      </div>

      <button onClick={() => {}}>ADD</button>
    </div>
  )
}

export default EditNotes