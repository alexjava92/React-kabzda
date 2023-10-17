import React, {useEffect} from "react";
import {useState} from "react";

export default {
    title: 'useEffect demo',
}


export const Example1 = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    console.log("SimpleExample");

    useEffect(() => {
        console.log("useEffect every render")
        document.title = counter.toString();
    })
    useEffect(() => {
        console.log("useEffect only first render")
        document.title = counter.toString();
    }, [])

    useEffect(() => {
        console.log("useEffect first render and every counter change")
        document.title = counter.toString();
    }, [counter])

    return <>
        <button onClick={()=>{setCounter(state => state + 1)}}>+</button>
        <button onClick={()=>{setFake(state => state + 1)}}>+</button>
        {counter}
    </>
}

export const SetTimeoutExample = () => {
    const [counter, setCounter] = useState(1)

    console.log("SetTimeoutExample");

    useEffect(() => {
        setInterval(() => {
            setCounter(state => state + 1)
        }, 1000)
    }, [])

    return <>
        Hello, counter: {counter}
    </>
}