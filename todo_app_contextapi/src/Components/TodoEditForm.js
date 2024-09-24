import React, { useContext, useState } from 'react';
import { TodoContext } from '../Contexts/TodoContext';

const TodoEditForm = ({ task }) => {
    const context = useContext(TodoContext);
    const [desc, setDesk] = useState(task.desc);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (desc) {
            context.addTask(desc);
            setDesk(""); //içi temizleme
            e.target.firstChild.firstChild.focus();
        } else {
            alert("Lütfen Boş bırakmayınız.");
        }
    }
    return (

        <form onSubmit={handleSubmit}>
            <div className="input-group mb-3">
                <input onChange={(e) => { setDesk(e.target.value) }} value={desc} type="text" className="form-control" placeholder="Görev yaz" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button className="btn btn-outline-warning" type="submit" id="btn-add-task">Task Güncelle</button>
            </div>
        </form>
    )
}

export default TodoEditForm