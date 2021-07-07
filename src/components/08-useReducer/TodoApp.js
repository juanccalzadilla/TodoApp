import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer';
import './styles.css'

import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

const init =()=>{


    return JSON.parse(localStorage.getItem('todos')) || []
} 
export const TodoApp = () => {


    const [todo, dispatch] = useReducer(todoReducer, [],init);

  
    const handleDelete = (todoID) => {
       
        const action = {
            type: 'delete',
            payload:todoID
        }

        dispatch(action)

    
    }

    const handleToggle = (todoID) =>{
        dispatch({
            type: 'toggle',
            payload:todoID
        })
    }

    const handleAdd = ( newTodo ) =>{

        dispatch({
            
        type:'add',
     payload: newTodo
        })

    }


    useEffect(() => {
        localStorage.setItem('todos',JSON.stringify(todo))
    }, [todo])
    return (
        <div>
            <h1>TodoApp ( {todo.length} ) </h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <TodoList todo={todo} handleDelete={handleDelete} handleToggle={handleToggle} />
                </div>

                <div className="col-5" id="alertt">
                    <TodoAdd handleAdd={handleAdd}/>
                </div>
            </div>
        </div>
    )
}
