//Context yani kapsam burada oluşturulacak. Burada tanımlananların hepsi bunun içindeki heryerde geçerlidir, ayrıca göndermeye gerek kalmayacak.

import React, { useState } from 'react';
import { TodoContext } from '../Contexts/TodoContext';
import TodoAddForm from './TodoAddForm';
import TodoContainer from './TodoContainer';
import { v4 as idGenerate } from 'uuid';
import TodoFilter from './TodoFilter';

const TodoWrapper = ({ tasks }) => {
    const [taskList, setTaskList] = useState(tasks);
    const [filterMode, setFilterMode] = useState("all")//filtreleme yapmak 1.adım.
    //filtermode eğer all ise hepsini göster. filtermode true ise completed gösterilecek, false ise completed olmayanları göstericek./2.adı providere eklemek 62.satır.

    const addTask = _desc => { //Girilen görev bilgisi tutulacak.

        setTaskList(
            [...taskList, {
                id: idGenerate(),
                desc: _desc,
                isCompleted: false,
                isEditing: false
            }]
        );
        console.log(taskList);
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
            taskList.map(task => task.id === id ? { ...task, isEditing: true } : { ...task, isEditing: false })
        );
    }

    const updateTask = (id, _desc) => {
        setTaskList(//Herbir task için şu task.id eşit mi id ye kontrolünü yap. ?Eğer eşitse normal tüm özellikleri koy, dışarıdan gelen desc koy. isEditing daha öncekinin tam tersi !eğer öyle değilse taski aynen koy.
            taskList.map(task => task.id === id ? { ...task, desc: _desc, isEditing: !task.isEditing } : task)
        );
    }

    const clearAll = () => {
        setTaskList([]);
    }

    const setLocalStorage = () => {

    }

    //TodoContext içerisine yazılan herşeyde TodoContext de var olan propslar kullanılabilir olacak.
    return (
        //Göndermek istediklerimizi value içine yazılır. Ardından kullanmak isteiğimiz componentde import işlemi yapılır.
        //Merkezi bir yere koyduk diğer bütün companentler lazım oldukça çağırıp kullanabilecek.
        //Diğer comp. lerden import etmemiz gerek. TodoAddForm.js 2. ve 6.satır.
        <TodoContext.Provider value={{ taskList, setTaskList, addTask, toggleComplete, deleteTask, toggleEditing, updateTask, clearAll, filterMode, setFilterMode }} >
            <div className='container w-50 p-5'>
                <TodoAddForm />
                <TodoFilter />
                <TodoContainer />
            </div>
        </TodoContext.Provider>
    )
}

export default TodoWrapper;