import React, { useState } from 'react';
import './TagsInput.css';
import { MdAdd, MdClose } from 'react-icons/md';

const TagsInput = (props) => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const addNewTag = () => {
        if (inputValue.trim() !== "") { // Fixed condition to add only if there's input
            props.setTags([...props.tags, inputValue.trim()]);
            setInputValue("");
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            addNewTag();
        }
    };

    const handleRemoveTag = (tagToRemove) => {
        props.setTags(props.tags.filter((tag) => tag !== tagToRemove));
    };

    return (
        <div className='tags'>
            {props.tags.length > 0 && (
                <div className='tag-container'> 
                    {props.tags.map((tag, index) => (
                        <span className='tag' key={index}>
                            # {tag}
                            <button className='gray-button remove-button' onClick={() => handleRemoveTag(tag)}> 
                                <MdClose className='icons' /> 
                            </button>
                        </span>
                    ))}
                </div>
            )}

            <div className='input-container'> 
                <input 
                    type="text" 
                    placeholder='Add tags' 
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown} 
                />
                <button className='add-tags-button gray-button' onClick={addNewTag}>
                    <MdAdd className='icons' />
                </button>
            </div>
        </div>
    );
};

export default TagsInput;
