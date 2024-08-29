import React from 'react'

const TodoAddForm = () => {
    return (

        <div className='container w-50 p-5'>
            <h1 className='display-5 text-center mb-5 text-primary'>Todo App</h1>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Görev yaz" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button className="btn btn-outline-success" type="button" id="button-addon2">Task Ekle</button>
            </div>
        </div>

    )
}

export default TodoAddForm