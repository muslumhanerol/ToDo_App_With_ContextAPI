import React from 'react'

const TodoAddForm = () => {
    const handleSubmit = () => {

    }
    return (

        <div className='container w-50 p-5'>
            <h1 className='display-5 text-center mb-5 text-primary'>Todo App</h1>
            {/* form butonuna tıklandığında handleSubmit fonks. çalıştır. */}
            <form onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Görev yaz" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button className="btn btn-outline-success" type="submit" id="btn-add-task">Task Ekle</button>
                </div>
            </form>
        </div>

    )
}

export default TodoAddForm