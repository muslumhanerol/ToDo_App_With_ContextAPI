import React, { useContext } from 'react'
import { TodoContext } from '../Contexts/TodoContext'
import Todo from './Todo';
import TodoEditForm from './TodoEditForm';

const TodoContainer = () => {
    const context = useContext(TodoContext);
    return (
        <>
            <ul className='list-group'>
                {
                    context.taskList.map(task => {
                        // if (task.isEditing) {
                        //     return <TodoEditForm key={task.id} task={task} />
                        // } else {
                        //     return <Todo key={task.id} task={task} />
                        // }

                        if (context.filterMode == "all") {//filtermode al ise normal çalışacak.
                            if (task.isEditing) {
                                return <TodoEditForm key={task.id} task={task} />
                            } else {
                                return <Todo key={task.id} task={task} />
                            }
                        } else {
                            if (task.isCompleted == context.filterMode) {//ilgili taskin isCompletedı context içindeki filtermode eşitse yani all,true,false. İlk if koşulu all old. burada ya true yada false olacak.
                                if (task.isEditing) {
                                    return <TodoEditForm key={task.id} task={task} />
                                } else {
                                    return <Todo key={task.id} task={task} />
                                }
                            }
                        }
                    })
                }
            </ul>
        </>
    )

}

export default TodoContainer;