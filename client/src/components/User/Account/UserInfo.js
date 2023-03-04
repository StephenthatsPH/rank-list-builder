import React from 'react'

function UserInfo({ user }) {

    return (
        <div>
            <h1>User Account</h1>
            <hr />
            <h4>Name</h4>
            <p>{user.first_name} {user.last_name}</p>
            <h4>Email</h4>
            <p>{user.email}</p>
            <h4>Phone Number</h4>
            <p>{user.phone_number}</p>
        </div>
    )
}

export default UserInfo