import React, { useContext, useState } from 'react';
import { TodoContext } from '../Contexts/TodoContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

const TodoAddForm = () => {
    const context = useContext(TodoContext);
    const [desc, setDesk] = useState(""); //Başlangıç değeri boş çünkü yeni görev girilen yer.
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

        <div className='container-fluid g-0'>
            <h1 className='display-5 text-center mb-5 text-primary'>Todo App</h1>
            {/* form butonuna tıklandığında handleSubmit fonks. çalıştır. */}
            <form onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                    <input onChange={(e) => { setDesk(e.target.value) }} value={desc} type="text" className="form-control" placeholder="Görev yaz" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button className="btn btn-outline-success" type="submit" id="btn-add-task">
                        {/* <FontAwesomeIcon icon={faCirclePlus} size='2xl' /> 1.yöntem */}
                        <FontAwesomeIcon icon={faCirclePlus} className='fs-1' />
                    </button>

                </div>
            </form >
        </div >
    )
}

export default TodoAddForm