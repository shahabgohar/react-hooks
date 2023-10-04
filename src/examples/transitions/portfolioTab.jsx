import {memo} from "react";

const SlowPost = ({index}) => {
    let startTime = performance.now()
    while (performance.now() - startTime < 1) {

    }

    return <li>Project# {index}</li>
}

function portfolioTab() {
    return (
        <ul>
            {Array.from({length: 1200}, (_,i) => {
               return <SlowPost key={i} index={i}></SlowPost>
           })}
        </ul>
    )
}

export  default memo(portfolioTab);