
const SlowPostItem = ({text}) => {
    let startTime = performance.now()
    while (performance.now() - startTime < 1) {

    }
    return (
        <div>text: {text}</div>
    )
}

export default function Post({text}) {
    const items = Array.from({length: 100}, (_,i) => {
        return <SlowPostItem text={text} key={i}></SlowPostItem>
    })
    return (
        <ul>
            {items}
        </ul>
    )
}