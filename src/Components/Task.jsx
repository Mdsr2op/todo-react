import React from 'react'

const Task = ({title,description,index,deleteTask}) => {
  return (
    <div className="task">
        <div>
            <p>{title}</p>
            <p className='description'>{description}</p>
        </div>
        <button onClick={()=> deleteTask(index)}>-</button>
    </div>
  )
}

export default Task