import React, { useContext } from 'react'
import { UserContext } from '../../../context/userContext'

function Ranklist() {
    const {user} = useContext(UserContext)

    return (
        <div>
            <h1>{user.first_name}'s rank list</h1>
            <p>ability to create a list of programs base on your ratings</p>
        </div>
    )
}

export default Ranklist
