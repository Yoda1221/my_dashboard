import { createContext, useState } from 'react'

const StateContext = createContext(false)

export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(false)
    
    return (
        <StateContext.Provider value={{ activeMenu, setActiveMenu }} >
            {children}
        </StateContext.Provider>
    )
}


export default StateContext
