import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

const NewBoxForm = ({ addBox}) => {
    const INITIAL_STATE = {
        background: "",
        width: "",
        height: ""
    }
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        setFormData({
            ...formData, 
            [e.target.name]: e.target.value
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // add new box
        addBox({ ...formData, id: uuid() });
        // clear the form
        setFormData(INITIAL_STATE);
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='background'>Background Color:</label>
            <input 
                type='text'
                name='background'
                id='background'
                value={formData.background}
                onChange={handleChange}
            />

            <label htmlFor='width'>Width: {formData.width}</label>
            <input 
                type='range'
                min={10}
                max={500}
                name='width'
                id='width'
                value={formData.width}
                onChange={handleChange}
            />

            <label htmlFor='height'>Height: {formData.height}</label>
            <input 
                type='range'
                min={10}
                max={500}
                name='height'
                id='height'
                value={formData.height}
                onChange={handleChange}
            />

            <button>Add Box</button>
        </form>
    )
}

export default NewBoxForm;