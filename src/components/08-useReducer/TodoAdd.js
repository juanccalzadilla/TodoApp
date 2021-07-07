import React from 'react'
import { useForm } from '../../hooks/useForm';
import { Alert } from './Alert';

export const TodoAdd = ({handleAdd}) => {

    const [{description},handleInput,reset] = useForm({
        description:'' 
     });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (description.trim().length <= 1 || description === '') {
            return
        }
        const newTodo = {
            id: new Date().getTime(),
            desc:description,
            done: false
        };
 
        handleAdd( newTodo )
        reset();
    }
    return (
        <>
            <h4 className="text-center">Add new todo</h4>
                    <hr/>
                    <form onSubmit={handleSubmit}>
                        <input 
                       value={description}
                        onChange={handleInput}
                        name="description"
                        type="text" 
                        className="form-control"
                         placeholder="Description..." 
                         autoComplete="off"></input>
                         <button className="btn btn-outline-primary mt-1 w-100" type="submit">Add new TODO</button>
                    </form>
                    {(description.trim() === '') && <Alert message={'New description'}/>}
        </>
    )
}
