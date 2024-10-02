import React, { useContext } from 'react'
import { TodoContext } from '../Contexts/TodoContext';

const TodoFilter = () => {
    const context = useContext(TodoContext);
    return (
        <>
            <div className='container-fluid d-flex justify-content-between p-2 mb-1 g-0 border rounded-1'>
                <div className='button-group'>
                    <button onClick={() => { context.setFilterMode("all"); console.log(context.filterMode) }} className='btn btn-success btn-sm me-1'>Hepsi</button>

                    <button onClick={() => { context.setFilterMode(false); console.log(context.filterMode) }} className='btn btn-warning btn-sm me-1'>Tamamlanmamış</button>

                    <button onClick={() => { context.setFilterMode(true); console.log(context.filterMode) }} className='btn btn-info btn-sm me-1'>Tamamlandı</button>
                </div>
                <button className='btn btn-danger btn-sm' type='button' id='btn-clear-all' onClick={() => { useContext.clearAll() }}>Hepsini Temizle</button>
            </div>
        </>
    )
}

export default TodoFilter;