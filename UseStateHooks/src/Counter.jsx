import { useState } from "react";

function Counter(){
    const [count, setCount] = useState(0);

    const increaseCount = () =>{
        setCount(count + 1);
    }
    const decreaseCount = () =>{
        setCount(count - 1);
    }
    const reset = () => {
        setCount(0);
    }
    return(
        <div>
            <h2>{count}</h2>
            <button onClick={decreaseCount}>-</button>
            <button onClick={reset}>Reset</button>
            <button onClick={increaseCount}>+</button>
        </div>
    );
}

export default Counter;