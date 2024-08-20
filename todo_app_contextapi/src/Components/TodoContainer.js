import React, { useContext } from 'react'
import { TodoContext } from '../Contexts/TodoContext'

const TodoContainer = () => {
    const context = useContext(TodoContext);
    return (
        <>

            <div>TodoContainer</div>
            <div>{context.taskList[0].desc}</div>
            <div>{context.taskList[1].desc}</div>


        </>
    )

}

export default TodoContainer