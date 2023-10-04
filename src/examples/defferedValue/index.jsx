import Post from "./Post.jsx";
import {useDeferredValue, useState} from "react";

export default function DefferedValue() {
    const [query, setQuery] = useState('')
    const defferedQuery = useDeferredValue(query)
    return (
        <div>
            <label>Input text</label>
            <input
                placeholder="input some text here"
                value={query}
                onChange={(e) => setQuery(e.target.value)}/>
            <Post text={defferedQuery}/>
        </div>
    )
}