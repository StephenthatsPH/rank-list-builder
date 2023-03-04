import React, { useState } from 'react'

function EditUserPassword({ user }) {
    // const [oldPassword, setOldPassword] = useState('');
    const [password, setPassword] = useState('');
    const [password_confirmation, setPassword_confirmation] = useState('');
    const [id, setId] = useState(user.id);


    function handleEditSubmit(e) {
        e.preventDefault();
        fetch(`/users/${id}`, {
            method: "PATCH",
            body: JSON.stringify({
                password: password,
                password_confirmation: password_confirmation
            }),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                console.log(response);
            })
    }

    return (
        <div>
            <form onSubmit={handleEditSubmit}>
                <hr />
                <h1>Edit User Info</h1>
                <hr />
                <label>
                    New Password:
                    <input required type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <br />
                <label>
                    Confirm New Password:
                    <input required type="password" name="password_confirmation" value={password_confirmation} onChange={(e) => setPassword_confirmation(e.target.value)} />
                </label>
                <br />
                <button type="submit" value="Submit" >Update</button>
            </form>
        </div>
    )
}

export default EditUserPassword
