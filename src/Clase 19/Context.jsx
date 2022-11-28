import { createContext, useContext, useState } from "react";

const SalarioState = createContext()

const Context = ({children}) => {

    const [salario, setSalario] = useState(150000)

    return (
        <SalarioState.Provider 
            value={{
                salario, 
                setSalario
            }}
        >
            {children}
        </SalarioState.Provider>
    )
}

export default Context

export const useSalarioState = () => {
    return useContext(SalarioState)
}