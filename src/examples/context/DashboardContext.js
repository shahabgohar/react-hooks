import {createContext, useContext} from "react";

export const DashboardContext = createContext(undefined)

export function userContext() {
    const user = useContext(DashboardContext)

    if(!user) {
        throw new Error("the user is not provided")
    }

    return user
}