import React, { useContext } from 'react'
import { TodoContext } from '../Contexts/TodoContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';

const Todo = ({ task }) => {
    const context = useContext(TodoContext);
    return (
        <div>
            <li className={task.isCompleted ? "d-flex justify-content-between list-group-item rounded-2 mb-1 text-decoration-line-through text-success" : "d-flex justify-content-between list-group-item rounded-2 mb-1"}>
                <div role="button" onClick={() => { context.toggleComplete(task.id) }} className='w-75'>
                    {task.desc}
                </div>
                <div>
                    <button className='btn btn-warning me-1' onClick={() => { context.toggleEditimg(task.id) }}><FontAwesomeIcon icon={faPenToSquare} /></button>

                    <button className='btn btn-danger' onClick={() => { context.deleteTask(task.id) }}><FontAwesomeIcon icon={faTrashCan} /></button>
                </div>
            </li>
        </div >
    )
}

export default Todo