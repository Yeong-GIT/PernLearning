import React, {Fragment, useState} from 'react'

const InputTodo = () => {

    const [description, setDescription] = useState("");
    
    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = { description };
            const response = await fetch("http://localhost:5000/todos",{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });

            window.location = "/";
        } catch (err) {
            console.err(err.message)
        }
    }

    return (
        <Fragment>
            <div >
                    <h1 className='text-7xl'>Pern Todo List</h1>
                    <form className='mt-20' onSubmit={onSubmitForm}>
                        <input type = "text" className='bg-gray-100 h-10 w-3/5' value={description} onChange={e => setDescription(e.target.value)}/>
                        <button type="submit" className='bg-pink-400 h-10 w-10 rounded-md'>Add</button>
                    </form>
                    </div>
        </Fragment>
    )
}

export default InputTodo;