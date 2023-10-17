import React from "react";
import {useState} from "react";

export default {
    title: 'useState demo',
}

function generateData() {
    console.log("generateData")
    return 1;
}

export const Example1 = () => {
    const [counter, setCounter] = useState(generateData)


    return <>
        <button onClick={()=>{setCounter(state => state + 1)}}>+</button>
        {counter}
    </>
}