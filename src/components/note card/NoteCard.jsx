import React from 'react'
import './NoteCard.css'
import { MdOutlinePushPin } from 'react-icons/md'
import { MdCreate, MdDelete } from 'react-icons/md'

const NoteCard = (props) => {
  
  return (
    <div className='notecard'>
      <div className='notecard-top'>
        <div>
          <h3>{props.title}</h3>
          <span className='date'>{props.date}</span>
        </div>

        <MdOutlinePushPin onClick={props.onPinnedNote} style={{paddingBottom:18}} className={props.isPinned ?"pin-blue" : "icons"}/>
      </div>

      <p>{props.content?.slice(0,60)}. . . .</p>

      <div className='notecard-bottom'>
        <div className='tags'>{props.tags.map((item) => `#${item}`)}</div>
        <div className='delete-edit'>
          <MdCreate className='edit icons' onClick={props.onEdit}/>
          <MdDelete className='delete icons' onClick={props.onDelete}/>
        </div>
      </div>
    </div>
  )
}

export default NoteCard