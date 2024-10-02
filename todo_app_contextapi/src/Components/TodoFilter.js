import React from 'react'

const TodoFilter = () => {
    return (
        <>
            <div className='container-fluid d-flex justify-content-between p-2 mb-1 g-0 border rounded-1'>
                <div className='button-group'>

                </div>
                <button className='btn btn-danger btn-sm' type='button' id='btn-clear-all' onClick={() => { useContext.clearAll() }}>Hepsini Temizle</button>
            </div>
        </>
    )
}

export default TodoFilter;