import {React, memo} from "react";


function SearchInput({onChange}) {
    console.log('search input re rendered')
    return (
        <input
            placeholder="search for users"
            onChange={(e) => onChange(e.target.value)}
        />
    )
}

/**
 * component wrapped in memo
 * memo will check if the props being passed to rhe component
 * is different than the prev. one
 * if different then it will re render the component
 * if not not the it will not re-render the component
 * we also need to keep in mind that functions being passed as props are considered
 * different on each render
 *
 */
export default memo(SearchInput)