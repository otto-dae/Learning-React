import { useState, useEffect } from "react";


/*
useEffet(function, [dependecies])

1. useEffect (() => {}) Runs after every re-render
2. useEffect (() => {}, []) Runs only on mount
3. useEffect (() => {}, [value]) RUns on mount + when value changes 
*/
function UseEffect(){

    const[Width, setWidth] = useState(window.innerWidth);
    const[Height, setHeight] = useState(window.innerHeight);    

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight)
        return() =>{
            window.removeEventListener("resize", handleResize)
        }
    }
    useEffect(()=>{
        logSomething();
        window.addEventListener("resize", handleResize)
    });

    function logSomething(){     
        console.log("Something")
    }
    return(<>
            <p>Width: {Width}</p>
            <p>Height:{Height}</p>
      </>)
}

export default UseEffect;