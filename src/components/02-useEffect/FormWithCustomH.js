import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm';
import './effects.css'
import { Message } from './Message';



export const FormWithCustomH = () => {

    const [values, handleChange] = useForm({
        name: '',
        email: '',
        password: ''
    })

    const { name, email,password } = values;

    useEffect(() => {
        console.log('Email change')
      
    }, [email]);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(values)
    }

    return (

        <form onSubmit={handleSubmit}>
            <h1>FormWithCustomH</h1>
            <hr />
            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Nombre"
                    autoComplete="off"
                    value={name}
                    onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                    autoComplete="off"
                    value={email}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Password"
                    autoComplete="off"
                    value={password}
                    onChange={handleChange}
                />
            </div>
            
            {(name === 'Sharon') && <Message/>}
            <button type="submit" className="btn btn-success">Guardar</button>
        </form>
        
    )
}
