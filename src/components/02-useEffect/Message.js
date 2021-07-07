import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coors, setCoors] = useState({x:0,y:0})

    const {x,y} = coors;
    useEffect(() => {
        const mouseMoveEvent = (e) =>{
              const coors = {x: e.x,y: e.y}
            setCoors( coors )
            
        }
        window.addEventListener('mousemove',mouseMoveEvent)
        return () => {
            window.removeEventListener('mousemove',mouseMoveEvent)
        }
    }, [])


    return (
        <>
           <h1>Eres Genial</h1>
           <p>
               x : {x}
               y : {y}
            </p> 
        </>
    )
}
