import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import './counter.css'
export const CounterWithCustomHook = () => {
    const {decrement,increment,state,reset} = useCounter(50);
    return (
        <>
            <h1>Counter With Custom Hook : {state}</h1>
            <hr/>
            <button onClick={()=>{increment(3)}} className="btn btn-primary">+1</button>
            <button onClick={reset} className="btn btn-warning m-4">Reset</button>
            <button onClick={()=>{decrement(2)}} className="btn btn-primary">-1</button>
        </>
    )
}
