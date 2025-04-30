import React, { useEffect, useState } from 'react'
import { getNotes, removeNote } from '../utils/storage'
const NotesList = () => {

    const [notes, setupNotes] = useState([]);


    useEffect(() => {
        const storedNotes = getNotes();
        setupNotes(storedNotes);
    }, [])


    const handleDelete = (id) => {
        removeNote(id);
        setupNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
    }

    
    return (
        <div className='max-w-6xl mx-auto px-4 mt-6 '>

            {
                notes.length === 0 ? (
                    <p className='text-center text-gray-500'>No notes available</p>
                ) :
                    (
                        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6" >

                            {notes.map((note) => (
                                <div key={note.id} className=' w-80 p-4 rounded shadow flex flex-col bg-white  '>
                                    <div className='flex justify-between'>
                                        <h2 className='text-xl font-semibold mb-2 '>{note.title}</h2>
                                        <button onClick={() => handleDelete(note.id)}
                                            className=' px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600'>
                                            Delte
                                        </button>
                                    </div>

                                    <div className='overflow-y-auto max-h-48'>
                                        <h2 className='text-gray-700  '>{note.content}</h2>
                                    </div>


                                </div>
                            ))
                            }

                        </div>
                    )

            }
        </div>
    )
}

export default NotesList



