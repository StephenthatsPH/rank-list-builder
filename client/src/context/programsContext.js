import React, { useEffect, useState } from 'react'

const ProgramContext = React.createContext();

const ProgramProvider = ({ children }) => {
    const [programs, setPrograms] = useState([])

    useEffect(() => {
        fetch('/programs')
            .then((res) => res.json())
            .then((data) =>{
                setPrograms(data);
                console.log(data)
            }) 
    }, []);

    return (
        <ProgramContext.Provider value={{ programs, setPrograms }}>
            {children}
        </ProgramContext.Provider>
    )
}

export { ProgramContext, ProgramProvider }
