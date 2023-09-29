import {React, useEffect, useRef, useState} from "react";
import {userContext} from "../context/DashboardContext.js";

function RefDemo() {
    const user = userContext()

    const [increment, setIncrement] = useState(0)
    // refs cannot be used to render in html
    const refIncrement = useRef(0)
    // also just they can also behave like refs in vue
    const refButton = useRef()

    // hooks are called when whole ui is rendered
    useEffect(() => {
        console.log('effect called ')
        refButton.current.style.backgroundColor = 'red'
    }, []);
    const userIncrement = () => {
        refIncrement.current++
        setIncrement(increment + 1)
        console.log('increment state ', increment)
        // immediate update of the value
        console.log('ref increment ', refIncrement.current)
    }
    return (
        <div>
            <h1>{user.name}</h1>
            <h1>Increment: {increment}</h1>
            <button ref={refButton} onClick={userIncrement}>Increment</button>
        </div>
    )
}

export default RefDemo