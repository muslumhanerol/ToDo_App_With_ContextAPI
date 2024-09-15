import React from 'react'

const Todo = ({ task }) => {
    return (
        <div>
            <li className="list-group-item rounded-2 mb-1">{task.desc}</li>
        </div>
    )
}

export default Todo