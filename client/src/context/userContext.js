import React, { useEffect, useState } from 'react'

const UserContext = React.createContext();

const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([])
    const [auth, setAuth] = useState(false)

    useEffect(() => {
        fetch('/me').then((r) => {
            if (r.ok) {
                r.json().then((user) => {
                    setUsers(user)
                    setAuth(true)
                    console.log(user.ranklists)
                });
            }
        })
    }, []);

    function handleLogout() {
        fetch('/logout', { method: 'DELETE', }).then((r) => {
            if (r.ok) {
                setUsers([]);
                setAuth(false);
            }
        });
    }

    function deleteRanklist(deletedRanklist) {
        const filteredRanklists = users.ranklists.filter((r) => r.id !== deletedRanklist.ranklist.id);
        const updatedUser = { ...users, ranklists: filteredRanklists }

        setUsers(updatedUser);
    }

    function editedRanklist(updatedRanklist) {
        const updatedRanklists = users.ranklists.map((ranklist) => {
            if (ranklist.id === updatedRanklist.id) {
                return updatedRanklist;
            } else {
                return ranklist;
            }
        });
        const updatedUser = { ...users, ranklists: updatedRanklists }
        setUsers(updatedUser);
    }


    function addRanklist(newRanklist) {
        const updatedRanklists = [...users.ranklists, newRanklist]
        const updatedUser = { ...users, ranklists: updatedRanklists }
        setUsers(updatedUser);
    }

    return (
        <UserContext.Provider value={{ users, setUsers, auth, setAuth, handleLogout, editedRanklist, deleteRanklist, addRanklist }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }
