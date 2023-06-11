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
                    <h1 className='text-5xl text-center '>Pern Todo List</h1>
                    <form className='mt-5' onSubmit={onSubmitForm}>
                        <input 
                        type = "text" 
                        className="bg-gray-200" value={description} onChange={e => setDescription(e.target.value)}/>
                        <button type="submit">Add</button>
                    </form>
                    </div>
        </Fragment>
    )
}

export default InputTodo;