import React, {useCallback, useMemo, useState} from "react";


export default {
    title: 'useMemo'
}

export const DifficultCountingExample = () => {

    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 10000000) {
                fake++;
                const fakeValue = Math.random();
            }
            tempResultA = tempResultA * i
        }
        return tempResultA
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return <>
        <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
        <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))}/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>

        <div>
            Result for b: {resultB}
        </div>

    </>
}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log("USERS")
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {
    console.log("Example")
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["Dimych", "Sasha", "Darklyd"])

    const newArray = useMemo(() => {
        const newArray = users.filter(u => u.toLowerCase().indexOf("a") > -1)
        return newArray
    }, [users])

    return <>
        <button onClick={() => {
            setCounter(counter + 1)
        }}>+
        </button>
        {counter}
        <Users users={newArray}/>
    </>
}

export const LikeUseCallback = () => {
    console.log("LikeUseCallback")
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(["React", "JS", "CSS"])

    const newArray = useMemo(() => {
        const newArray = books.filter(b => b.toLowerCase().indexOf("a") > -1)
        return newArray
    }, [books])

    const addBook = () => {
        const newBook = [...books, ' angular ' + new Date().getTime()]
        setBooks(newBook)
    }

    const memoizedAddBook = useCallback(() => {
        const newBook = [...books, ' angular ' + new Date().getTime()]
        setBooks(newBook)
    }, [books])

    return <>

        <button onClick={() => {
            setCounter(counter + 1)
        }}>+
        </button>
        {counter}
        <Book books={newArray} addBook={memoizedAddBook}/>
    </>
}


const BooksSecret = (props: { books: Array<string>; addBook: () => void }) => {
    console.log("USERS")
    return <div>
        <button onClick={props.addBook}>add book</button>
        {props.books.map((b, i) => <div key={i}>{b}</div>)}
    </div>
}

const Book = React.memo(BooksSecret)