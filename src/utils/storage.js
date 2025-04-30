export const getNotes=()=>{
    try{
        const  notes=localStorage.getItem("notes_key") ? JSON.parse(localStorage.getItem("notes_key")) :[]
        return notes;
    }
    catch(error)
    {
        console.log("error recieved ",error);
        console.error("error in rgetting all notes");
        throw new Error('Unable to load notes from storage.');
       
    }
}

export const setNotes=(notes)=>{
    try{
        localStorage.setItem("notes_key",JSON.stringify(notes));
    }
    catch(error)
    {
        console.log("error recieved ",error);
        console.error('Error in saving notes in localstorage');
        throw new Error('Unable to save note. Local storage may be full.');

    }
    
}



export const removeNote=(id)=>{
    try{
   
        const notes=getNotes();
        const updatedNotes=notes.filter((note)=>note.id!=id);
        setNotes(updatedNotes);
    }
    catch(error)
    {
        console.log("error recieved ",error);
console.error("error in deleting the note from localstorage")
throw new Error('Unable to delete note.');
    }
    
}