import React, { useEffect, useState } from 'react'
import './effects.css'
import { Message } from './Message';
export const SimpleForm = () => {

    const [state, setState] = useState({
        name: '',
        email: ''
    })

    const { name, email } = state;


    useEffect(() => {
        console.log('hey')
    }, [])

    const handleChange = ({ target }) => {
        setState({
            ...state,
            [target.name]: target.value
        })
    }
    return (

        <>
            <h1>Simple Form useEffect</h1>
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

           {(name === '123') && <Message/>}
        </>
    )
}
