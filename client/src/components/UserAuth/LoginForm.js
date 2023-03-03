import React from 'react';

function LoginForm() {

    return (
        <form>
            <label>
                Email:
                <input required type="email" name="email" />
            </label>
            <br />
            <label>
                Password:
                <input required type="password" name="password" />
            </label>
            <br />
            <button type="submit">Log In</button>
        </form>
    );
}

export default LoginForm;