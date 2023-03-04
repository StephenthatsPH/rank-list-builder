import React, { useEffect, useState } from 'react'

const HospitalContext = React.createContext();

const HospitalProvider = ({ children }) => {
    const [hospitals, setHospitals] = useState([])

    useEffect(() => {
        fetch('/hospitals')
            .then((res) => res.json())
            .then((data) =>{
                setHospitals(data);
                // console.log(data)
            }) 
    }, []);

    return (
        <HospitalContext.Provider value={{ hospitals, setHospitals }}>
            {children}
        </HospitalContext.Provider>
    )
}

export { HospitalContext, HospitalProvider }
