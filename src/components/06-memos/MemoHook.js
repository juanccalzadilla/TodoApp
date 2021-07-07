import React, { useMemo, useState } from 'react'
import { procesoPesado } from '../../helpers/procesoPesado'
import { useCounter } from '../../hooks/useCounter'
import '../02-useEffect/effects.css'

export const MemoHook = () => {

    const [show, setShow] = useState(true)
    const {counter, increment} = useCounter(6000)
    



    const memoProcessHard = useMemo(() => procesoPesado(counter), [counter])
    return (
        <div>
            <h1 >MemoHook</h1>
            <h3>Memorize: <small>{counter}</small> </h3>
            <hr/>

            <p>{memoProcessHard}</p>
            <button onClick={increment}className="btn btn-primary"> +1</button>
            <button onClick={()=>{
                setShow(!show)
            }} className="btn btn-outline-primary m-3">Show/Hide {JSON.stringify(show)}</button>
        </div>
    )
}
