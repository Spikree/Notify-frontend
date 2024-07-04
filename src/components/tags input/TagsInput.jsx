import React, { useState } from 'react'
import './TagsInput.css'
import { MdAdd, MdClose } from 'react-icons/md'

const TagsInput = (props) => {

    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const addNewTag = () => {
        if (!inputValue.trim() !== "") {
            props.setTags([...props.tags, inputValue.trim()]);
            setInputValue("");
        }
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            addNewTag();
        }
    }

    const handleRemoveTag = (tagToRemove) => {
        setTags(props.tags.filter((tag) => tag !== tagToRemove));
    }

    return (
        <div className='tags'>
            {props.tags?.length > 0 && (
                <div>
                    {props.tags.map((tag, index) => {
                        <span key={index}>
                            # {tag}
                            <button onClick={() => {handleRemoveTag(tag)}}><MdClose /></button>
                        </span>
                    })}
                </div>
            )}

            <div>
                <input type="text" placeholder='add tags' onChange={handleInputChange} onKeyDown={handleKeyDown} />
                <button onClick={() => { addNewTag() }}><MdAdd /></button>
            </div>
        </div>
    )
}

export default TagsInput