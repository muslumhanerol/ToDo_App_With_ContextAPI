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

    const toggleEditing = id => {
        setTaskList(
            taskList.map(task => task.id === id ? { ...task, isEditing: !task.isEditing } : task)
        );
    }

    const updateTask = (id, _desc) => {
        setTaskList(//Herbir task için şu task.id eşit mi id ye kontrolünü yap. ?Eğer eşitse normal tüm özellikleri koy, dışarıdan gelen desc koy. isEditing daha öncekinin tam tersi !eğer öyle değilse taski aynen koy.
            taskList.map(task => task.id === id ? { ...task, desc: _desc, isEditing: !task.isEditing } : task)
        );
    }

    //TodoContext içerisine yazılan herşeyde TodoContext de var olan propslar kullanılabilir olacak.
    return (
        //Göndermek istediklerimizi value içine yazılır. Ardından kullanmak isteiğimiz componentde import işlemi yapılır.
        //Merkezi bir yere koyduk diğer bütün companentler lazım oldukça çağırıp kullanabilecek.
        //Diğer comp. lerden import etmemiz gerek.
        <TodoContext.Provider value={{ taskList, setTaskList, addTask, toggleComplete, deleteTask, toggleEditing, updateTask }} >
            <TodoAddForm />
            <TodoContainer />
        </TodoContext.Provider>
    )
}

export default TodoWrapper;