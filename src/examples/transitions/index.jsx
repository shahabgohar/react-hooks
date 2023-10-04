import {React, useState, useTransition} from "react"
import TabButton from './tabButton.jsx'
import HomeTab from './homeTab.jsx'
import PortfolioTab from './portfolioTab.jsx'
import AboutTab from './aboutTab.jsx'

/**
 * use transitions is a react hook that tells the react that some ui updates are not priority. and if
 * another update comes up then skip the current one and prioritise the new one
 * @returns {Element}
 */
export default function transitions() {
    const [isPending, startTransition] = useTransition()
    const [tab, updateTab] = useState('Home')
    const tabs = [
        "Home",
        "Portfolio",
        "About"
    ]

    const tabPressedHandler = (name) => {
        startTransition(() => {
            updateTab(name)
        })

    }
    return (
       <>
       <div className="flex w-full flex-row justify-between">
           {
               tabs.map((name, index) => {
                   return <TabButton key={index} text={name} tabPressed={() => tabPressedHandler(name)}></TabButton>
               })
           }
       </div>
       {/*    selected tabButton content */}
           {isPending && 'the post are loading !!!!!' }
           {tab  === 'Home' && !isPending && <HomeTab/>}
           {tab  === 'Portfolio' && !isPending && <PortfolioTab />}
           {tab === 'About' && !isPending && <AboutTab />}
       </>
    )
}