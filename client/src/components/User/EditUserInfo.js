import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

function EditUserInfo({ user, setUser }) {
    const [first_name, setFirst_Name] = useState(user.first_name);
    const [last_name, setLast_Name] = useState(user.last_name);
    const [phone_number, setPhone_Number] = useState(user.phone_number);
    const [email, setEmail] = useState(user.email);
    const { id } = useParams(user.id);


    function handleEditSubmit(e) {
        e.preventDefault();
        fetch(`/users/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user: {
                    id: id,
                    first_name: first_name,
                    last_name: last_name,
                    phone_number: phone_number,
                    email: email
                }
            }),
        })
            .then((response) => {
                console.log(response);
                setUser({ first_name, last_name, phone_number, email });
            })
    }

    return (
        <div>
            <form onSubmit={handleEditSubmit}>
                <hr />
                <h1>Edit User Info</h1>
                <hr />
                <label>
                    First Name:
                    <input required type="text" name="first_name" value={first_name} onChange={(e) => setFirst_Name(e.target.value)} />
                </label>
                <br />
                <label>
                    Last Name:
                    <input required type="text" name="last_name" value={last_name} onChange={(e) => setLast_Name(e.target.value)} />
                </label>
                <br />
                <label>
                    Phone #:
                    <input required type="text" name="phone_number" value={phone_number} onChange={(e) => setPhone_Number(e.target.value)} />
                </label>
                <br />
                <label>
                    Email:
                    <input required type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <button type="submit" value="Submit" >Update</button>
            </form>
        </div>
    )
}

export default EditUserInfo
