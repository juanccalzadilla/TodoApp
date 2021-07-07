import React, { useLayoutEffect, useRef } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import './layout.css'

    
export const LayoutEffect = () => {
    

    const {counter, increment} = useCounter(1);
    const {data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);
  
    const {quote} = !!data && data[0];
    const pTag = useRef();

    useLayoutEffect(() => {
     console.log(pTag.current.getBoundingClientRect())
    }, [quote])

    return (
        <div>
            <h1>LayoutEffect</h1>
            <hr/>

            
            <blockquote className="blockquote text-end">
                <p className="mb-2 p-2" ref={pTag} >{quote}</p>
    
            </blockquote>

            

            <button onClick={increment} className="btn btn-primary">Next quote</button>

        </div>
    )
}
