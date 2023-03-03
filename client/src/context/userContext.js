import React, { useEffect, useState } from 'react'

const UserContext = React.createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [auth, setAuth] = useState(false)

    useEffect(() => {
        fetch('/users')
            .then((res) => res.json())
            .then((data) =>{
                setUser(data);
                // setAuth(true)
                // console.log(data)
            }) 
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser, auth, setAuth }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }
