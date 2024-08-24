import { useState } from "react";

function Input(){

    const [inputValue,setInputvalue]=useState("vamsi");

    const handleChange=(e)=>{
        const newValue = e.target.value;
        setInputvalue(newValue);

    }
    return(
        <>
            <input placeholder="Enter your name.." onChange={handleChange}/>
            {inputValue}
        </>
    )
}
export default Input;