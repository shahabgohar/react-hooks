import {React, useMemo, useState} from "react";



const initialItems = new Array(199_999_9).fill(0).map((_,i) => {
    return {
        id: i,
        isSelected: i === (199_999_9-1)
    }
})
/**
 * use memo will memoize (cache) the value and will update the result when its dependency gets changed
 * @returns {Element}
 */
export default function memoExample() {
    console.log('memo ran')
    const [count, setCount] = useState(0)
    const [items] = useState(initialItems)

    // without memo
    // const getSelectedItem = () => {
    //     console.log('computing !!!!')
    //     return items.find((item) => item.isSelected)
    // }
    // const selectedItem = getSelectedItem()

    // with memo

    const selectedItem = useMemo(() => {
        console.log('am i running ?')
        return items.find((item) => item.isSelected)
    }, [items])

    const selectedCountItem = useMemo(() => {
        return items.find(item => item.id === count)
    }, [count,items])

    return (
        <div>
            <h1>Count: {count}</h1>
            <h1>Selected Item: {selectedItem?.id}</h1>
            <h1>Selected count item: {selectedCountItem?.id}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}