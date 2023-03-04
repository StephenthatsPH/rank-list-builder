import React, { useEffect, useState } from 'react'

const UserContext = React.createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState([])
    const [auth, setAuth] = useState(false)

    useEffect(() => {
        fetch('/me').then((r) => {
            if (r.ok) {
                r.json().then((user) => {
                    setUser(user)
                    setAuth(true)
                });
            }
        })
    }, []);

    function handleLogout() {
        fetch('/logout', { method: 'DELETE', }).then((r) => {
            if (r.ok) {
                setUser([]);
                setAuth(false);
            }
        });
    }

    return (
        <UserContext.Provider value={{ user, setUser, auth, setAuth, handleLogout }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }
