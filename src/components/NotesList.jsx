import React, { useEffect, useState } from 'react'
import { getNotes, removeNote } from '../utils/storage'
const NotesList = () => {
//to store the notes list fetched from the localsto-orage
    const [notes, setupNotes] = useState([]);


    // calling the getNotes() to fetch the notes List
    useEffect(() => {
        const storedNotes = getNotes();
        setupNotes(storedNotes);
    }, [])


    // handle the delete note from List based on id
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
                        <div
                        //  className={`grid gap-6 ${notes.length===1 ? 'place-items-center' :  notes.length===2 ? 'place-items-center':'grid-cols-1 sm:grid-cols-2 md:grid-cols-3'} `}
                         className={`flex flex-wrap gap-6 ${
                            notes.length === 1
                              ? 'justify-center'
                              : notes.length === 2
                              ? 'justify-center'
                              : 'justify-start'
                          }`}
                         >

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



