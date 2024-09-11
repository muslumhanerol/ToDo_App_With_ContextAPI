import React, { useContext } from 'react'
import { TodoContext } from '../Contexts/TodoContext'
import Todo from './Todo';

const TodoContainer = () => {
    const context = useContext(TodoContext);
    return (
        <>
            <ul className='list-group'>
                <Todo />
                <Todo />
                <Todo />
                <Todo />

            </ul>
        </>
    )

}

export default TodoContainer