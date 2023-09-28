
import {useState} from "react";
import React = require("react");




export default {
    title: 'React memo demo',
}

const NewMessagesCounter =(props: {count: number}) => {
    return <div>{props.count}</div>
}

const UsersSecret =(props: { users: Array<string> }) => {
    console.log("USERS")
    return <div>
        {props.users.map((u,i) => <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersSecret)

export const Example1 = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["Dimych", "Sasha", "Darklyd"])
    const addUser = () => {
        const newUsers =  [...users, "Alena " + new Date().getTime()]
        setUsers(newUsers)
    }
    return <>
        <button onClick={()=>{setCounter(counter + 1)}}>+</button>
        <button onClick={addUser}>add user</button>
    <NewMessagesCounter count={counter}/>
        <Users users={users}/>
    </>
}