import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/userContext';

function LoginForm() {
    const { setUsers, setAuth } = useContext(UserContext)
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();

        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        }).then((response) => {
            if (response.ok) {
                response.json().then((user) => setUsers(user));
                setAuth(true)
                navigate('/')
            } else {
                response.json().then((errorData) => setErrors(errorData.errors));
            }
        });
    }

    return (
        <div className='main'>
            <div className='main-content'>
                <form onSubmit={handleSubmit}>
                    <h1 className='title'>Login</h1>
                    <h2>
                        Email:
                        <input required type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </h2>
                    <h3>
                        Password:
                        <input required type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </h3>
                    {errors.length > 0 && (
                        <ul style={{ color: "red" }}>
                            {errors.map((error) => (
                                <li key={error}>{error}</li>
                            ))}
                        </ul>
                    )}
                    <button type="submit">Log In</button>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;