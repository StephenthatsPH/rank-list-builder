import React from 'react';

function SignupForm() {

    return (
        <form>
            <label>
                First Name:
                <input type="text" name="first_name" />
            </label>
            <br />
            <label>
                Last Name:
                <input type="text" name="last_name" />
            </label>
            <br />
            <label>
                Phone #:
                <input type="text" name="phone_number" />
            </label>
            <br />
            <label>
                Email:
                <input type="email" name="email" />
            </label>
            <br />
            <label>
                Password:
                <input type="password" name="password" />
            </label>
            <br />
            <label>
                Confirm Password:
                <input type="password" name="password_confirmation" />
            </label>
            <br />
            <button type="submit">Sign Up</button>
        </form>
    );
}

export default SignupForm;