import {React, useReducer} from "react";

function reducer(state, action) {

    switch (action.type) {
        case 'INCREMENT': {
            return {
                ...state,
                value: state.value + 1
            }
        }

        default: {
            return state
        }
    }
}
export default function index() {
    const [count, dispatch] = useReducer(reducer, {value: 0})

    const increment = () => {
        dispatch({type: 'INCREMENT'})
    }
    return (
        <div>
            <div>increment: {count.value}</div>
            <button onClick={increment}>increment Value</button>
        </div>
    )
}