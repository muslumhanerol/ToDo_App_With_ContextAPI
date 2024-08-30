//Context yani kapsam burada oluşturulacak. Burada tanımlananların hepsi bunun içindeki heryerde geçerlidir, ayrıca göndermeye gerek kalmayacak.

import React, { useState } from 'react';
import { TodoContext } from '../Contexts/TodoContext';
import TodoAddForm from './TodoAddForm';
import TodoContainer from './TodoContainer';

const TodoWrapper = ({ tasks }) => {
    const [taskList, setTaskList] = useState(tasks);

    const addTask = () => { //Girilen görev bilgisi tutulacak.

    }

    //TodoContext içerisine yazılan herşeyde TodoContext de var olan propslar kullanılabilir olacak.
    return (
        //Göndermek istediklerimizi value içine yazılır. Ardından kullanmak isteiğimiz componentde import işlemi yapılır.

        <TodoContext.Provider value={{ taskList, setTaskList }} >
            <TodoAddForm />
            <TodoContainer />
        </TodoContext.Provider>
    )
}

export default TodoWrapper;