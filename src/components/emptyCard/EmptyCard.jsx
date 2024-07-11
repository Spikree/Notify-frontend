import React from 'react'
import './EmptyCard.css'
import { VscEmptyWindow } from "react-icons/vsc";

const EmptyCard = (props) => {
  return (
    <div className='empty-card'>
      <div className="empty-logo">
        <VscEmptyWindow />
      </div>

      <div className="empty-text">
        <p>Create your first note! Click on the add button to note down your thoughts, ideas, and reminders!!!</p>
      </div>
    </div>
  )
}

export default EmptyCard