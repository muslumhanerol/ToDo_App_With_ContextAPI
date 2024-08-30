//Context yani kapsam burada oluşturulacak. Burada tanımlananların hepsi bunun içindeki heryerde geçerlidir, ayrıca göndermeye gerek kalmayacak.

import React, { useState } from 'react';
import { TodoContext } from '../Contexts/TodoContext';
import TodoAddForm from './TodoAddForm';
import TodoContainer from './TodoContainer';
import { v4 as idGenerate } from 'uuid';

const TodoWrapper = ({ tasks }) => {
    const [taskList, setTaskList] = useState(tasks);

    const addTask = _desc => { //Girilen görev bilgisi tutulacak.

        setTaskList(
            [...taskList, {
                id: idGenerate(),
                desc: _desc,
                isCompleted: false,
                isEditing: false

            }]
        );
    }

    const toggleComplete = id => { //Görev durumunu değiştirme.
        setTaskList(
            taskList.map(task => task.id === id ? { ...task, isCompleted: !task.isCompleted } : task)
            //...task=task içindeki herşeyi ekle, sadece isCompleted değiş.
        );
    }

    const deleteTask = id => { //Görev silme.
        setTaskList(
            taskList.filter(task => task.id != id)
        );
    }

    const editTask = id => {
        setTaskList(

        );
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