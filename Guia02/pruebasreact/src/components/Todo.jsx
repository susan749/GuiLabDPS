import React from 'react'
const Todo = ({todo, index, numero,  deleteTodo}) => {
return (
    <>
      <div className="list">
<h1>{numero}-{todo}</h1><button className="btn/delete" onClick={()=> deleteTodo (index)}>x</button>
</div>  
</>
)
}
export default Todo