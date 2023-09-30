import {React, useEffect, useRef} from "react";
import Counter from './Counter.jsx'

export default function index() {
    const counterRef = useRef(null)


    return (
        <div>
            <div>hello this is imperative demo</div>
            <Counter ref={counterRef} />
            <button onClick={() => counterRef.current?.reset()}>Reset</button>
        </div>
    )
}