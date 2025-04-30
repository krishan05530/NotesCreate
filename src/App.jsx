
import { useState } from 'react'
import './App.css'
import AddNote from './components/AddNote';
import NotesList from './components/NotesList';
import Nav from './components/Nav';

function App() {

  const[view, setView]=useState('add');


  return (
 
 <div className='min-h-screen   bg-gray-200 flex flex-col  items-center'>
    <Nav view={view} setView={setView} /> 

  {
    view==='add' ? <AddNote onAdd={()=>setView('list')}  /> : <NotesList />
  }


 </div>
  )
}

export default App

