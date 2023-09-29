import {React, useCallback, useState} from "react";
import SearchInput from "./SearchInput.jsx";

const usersList = [
    'james',
    'shahab',
    'gohar',
    'captain price',
    'chuay'
]
export default function CallbackExample() {

    const [users, setUsers] = useState(usersList)
    // returns a memoized function which will be considered same on each component re-render when passed as props
    // frozen
    // it also means that every thing used inside the useCallback will be frozen in time
    //  to update it we need to pass a dependency
    // change in the value supplied to the dependency array will cause the memo to think it different from prev. one

    const handleSearch = useCallback((text) => {
        console.log('users in state ', users[0])
        const filteredUsers = usersList.filter((user) => {
            return user.includes(text.toLowerCase())
        })

        setUsers(filteredUsers)
    }, [users])

    const shuffleList = () => {
        let array = [...users]
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        setUsers(array)
    };

    return (
        <div>
            <div className="flex flex-row justify-center items-center gap-2">
                <button onClick={shuffleList}>Shuffle</button>
                <SearchInput onChange={handleSearch}></SearchInput>
            </div>
            <ul>
                {users.map((user) => <li key={user}>{user}</li>)}
            </ul>
        </div>
    )
}