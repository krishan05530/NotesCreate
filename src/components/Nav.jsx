// import React, { useEffect } from 'react'

const Nav = ({view,setView}) => {



  return (
   <nav className='flex justify-center space-x-4 mt-4 '>
<button
      onClick={() => setView('add')}
      
      className={`px-4 py-2 rounded bg-black ${
          view == 'add' ? 'bg-blue-500 text-white' : 'bg-gray-200'
      }`}
    >
          Add notes</button>

    <button onClick={()=>setView('list')}
      
      className={`px-4 py-2 rounded ${
        view == 'list' ? ' bg-blue-500 text-white' : 'bg-gray-200'
      }`}>View notes</button>

   </nav>
  )
}

export default Nav



