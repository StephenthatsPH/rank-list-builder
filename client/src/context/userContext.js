import React, { useEffect, useState } from 'react'

const UserContext = React.createContext();

const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([])
    const [auth, setAuth] = useState(false)
    const [ranklists, setRanklists] = useState([])

    useEffect(() => {
        fetch('/me').then((r) => {
            if (r.ok) {
                r.json().then((user) => {
                    setUsers(user)
                    setAuth(true)
                    setRanklists(user.ranklists)
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
        // const user = users.id  == deletedRanklist.user_id
        // const updatedRanklists = ranklists.filter((r) => r.id !== deletedRanklist.id);
        // const updatedUser = { ...user, ranklists: updatedRanklists }
        // setUsers(updatedUser);
        const updatedRanklists = [...users.ranklists, deletedRanklist]
        const updatedUser = { ...users, ranklists: updatedRanklists }
        setUsers(updatedUser);
    }

    function editedRanklist(updatedRanklist) {
        const updatedRanklists = ranklists.map((ranklist) => {
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
