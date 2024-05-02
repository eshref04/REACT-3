import React from 'react';
import TodoList from './components/TodoList'

const App = () => {
  return (
   <>
   <form action="">
   <input style={{padding:'8px',borderRadius:'4px',border:'none',backgroundColor:'yellowgreen',cursor:'pointer'}} type="text" placeholder='Add todo...'/>
    <button style={{padding:'8px',color:'white',backgroundColor:'red',border:'none',borderRadius:'4px',cursor:'pointer'}}>Add</button>
   </form>
   

   <TodoList/>
   </>
  )
}

export default App
