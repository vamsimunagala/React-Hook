import { useState } from "react";


function UseState(){
    const [counter,setCounter] = useState(0);

    const Increment =()=>{
        setCounter(counter+1)
    }

    const Decrement = ()=>{
        setCounter(counter-1);
    }
    return(
        <>
            <div>
                <p>{counter}</p>
                <button onClick={Increment}>Increment</button>
                <button onClick={Decrement}>Decrement</button>
            </div>
        </>
    )
}

export default UseState;