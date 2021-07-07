import { useState } from 'react';


export const useCounter = (initState = 10) => {
    const [counter, setCounter] = useState(initState)

    const increment = ()=>{
        setCounter( counter + 1)
    }
    const decrement = ( )=>{
        setCounter( counter -1 )
    }
    const reset = ()=>{
        setCounter( initState)
    }

    return {increment, decrement, counter,reset}
}
