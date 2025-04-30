import React, { useState } from 'react'
import { setNotes, getNotes } from '../utils/storage';
const AddNote = ({ onAdd }) => {

    //to store the value of title and content 
    const [formData, setFormData] = useState({ title: '', content: '' });

    // to show saving.. when submitng the form by making loading true
    const [loading, setLoading] = useState(false);

    //while fetching the value from localstorage if error recieve then show that error
    const [error, setError] = useState(null);

    //handle the chnages that happen in input field, so make form updated
    const handleChange = (e) => {
        e.preventDefault();

        setFormData((prevNote) => ({
            ...prevNote,
            [e.target.name]: e.target.value
        })
        )
    }


    //on Form submit button , create the new note and create updatedNotes with this new note 
    // then save this updated notes into localstorage by callng setNotes()
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        // const newNotes=[...getNotes(),note]
        try {
            const newNote = {
                id: Date.now(),
                title: formData.title,
                content: formData.content,
            };

            const existingNotes = getNotes();
            const updatedNotes = [...existingNotes, newNote];

            setNotes(updatedNotes);

            setFormData({ title: '', content: '' });

            onAdd();
        }
        catch (err) {
            console.log("error is", err);
            setError('⚠️ Failed to save note. Please try again.');
        }
        setLoading(false);

    }


    return (
        <div>

            <form onSubmit={handleSubmit}
                className="max-w-full mx-auto mt-4 p-4 bg-white rounded shadow">
                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded">
                        {error}
                    </div>
                )}
                
                <input
                    type='text'
                    value={formData.title} name='title'
                    placeholder='enter the title'
                    onChange={handleChange}
                    className='w-full p-2 mb-2 border border-gray-300 rounded'
                    required ></input>
                <textarea value={formData.content}
                    name='content'
                    placeholder='enter the content'
                    onChange={handleChange}
                    className='w-full p-2 mb-2 border border-gray-300 rounded'
                    required
                ></textarea>
                <button type='submit'
                    
                    className=' px-4 py-2  bg-blue-500 text-white rounded hover:bg-blue-600'
                >
                    {
                        loading ? 'saving...' : 'Add notes'}</button>
            </form>

        </div>
    )
}

export default AddNote




