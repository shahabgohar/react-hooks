export default function tabButton({text, tabPressed}) {
    return (
        <button className="h-14 bg-red-600 text-white px-4 rounded-3xl" onClick={tabPressed}>{text}</button>
    )
}