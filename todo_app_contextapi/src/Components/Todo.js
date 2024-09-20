import React from 'react'

const Todo = ({ task }) => {
    return (
        <div>
            <li className={task.isCompleted ? "list-group-item rounded-2 mb-1 text-decoration-line-through disabled" : "list-group-item rounded-2 mb-1"}>
                <div>
                    {task.desc}
                </div>
                <div>
                    <button className='btn btn-warning btn-sm'>Düzenle</button>
                    <button className='btn btn-danger btn-sm'>Sil</button>
                </div>


            </li>
        </div >
    )
}

export default Todo