//Context yani kapsam burada oluşturulacak. Burada tanımlananların hepsi bunun içindeki heryerde geçerlidir, ayrıca göndermeye gerek kalmayacak.

import React, { useState } from 'react';
import { TodoContext } from '../Contexts/TodoContext';
import TodoAddForm from './TodoAddForm';
import TodoContainer from './TodoContainer';

const TodoWrapper = ({ tasks }) => {
    const [taskList, setTaskList] = useState(tasks)


    return (
        <TodoContext.Provider value={{ taskList, setTaskList }} >
            <TodoAddForm />
            <TodoContainer />
        </TodoContext.Provider>
    )
}

export default TodoWrapper