import React, { useState } from 'react';

function SignupForm() {
    const [first_name, setFirst_Name] = useState('');
    const [last_name, setLast_Name] = useState('');
    const [phone_number, setPhone_Number] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password_confirmation, setPassword_Confirmation] = useState('');
    const [errors, setErrors] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();
        const strongParams = {
            user: {
                first_name: first_name,
                last_name: last_name,
                phone_number: phone_number,
                email: email,
                password: password,
                password_confirmation: password_confirmation
            }
        }
        fetch('/signup', {
            method: 'POST',
            body: JSON.stringify(strongParams),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            if (response.ok) {
                response.json().then((response) => console.log(response));
            } else {
                response.json().then((errorData) => setErrors(errorData.errors));
            }
        });
    };

    return (
        <div className='main'>
            <div className='main-content'>
                <form onSubmit={handleSubmit}>
                <h1 className='title'>Create Account</h1>
                    <h2>
                        First Name:
                        <input type="text" name="first_name" value={first_name} onChange={(e) => setFirst_Name(e.target.value)} />
                    </h2>
                    <h2>
                        Last Name:
                        <input type="text" name="last_name" value={last_name} onChange={(e) => setLast_Name(e.target.value)} />
                    </h2>
                    <h2>
                        Phone #:
                        <input type="text" name="phone_number" value={phone_number} onChange={(e) => setPhone_Number(e.target.value)} />
                    </h2>
                    <h2>
                        Email:
                        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </h2>
                    <h2>
                        Password:
                        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </h2>
                    <h2>
                        Confirm Password:
                        <input type="password" name="password_confirmation" value={password_confirmation} onChange={(e) => setPassword_Confirmation(e.target.value)} />
                    </h2>
                    {errors.length > 0 && (
                        <ul style={{ color: "red" }}>
                            {errors.map((error) => (
                                <li key={error}>{error}</li>
                            ))}
                        </ul>
                    )}
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    );
}

export default SignupForm;