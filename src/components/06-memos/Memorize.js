import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { Small } from './Small'
import '../02-useEffect/effects.css'

export const Memorize = () => {

    const [show, setShow] = useState(true)
    const {counter, increment} = useCounter(10)
    return (
        <div>
            <h1>Memorize: <Small value={counter}/></h1>
            <hr/>
            <button onClick={increment}className="btn btn-primary"> +1</button>
            <button onClick={()=>{
                setShow(!show)
            }} className="btn btn-outline-primary m-3">Show/Hide {JSON.stringify(show)}</button>
        </div>
    )
}
