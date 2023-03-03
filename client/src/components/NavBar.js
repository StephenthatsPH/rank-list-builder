import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import UserAccount from './UserAuth/UserAccount';
import Home from './Home';
import ProgramsPage from './ProgramsPage';
import Ranklist from './Ranklist';
import Hospitals from './Hospitals';
import AuthPage from './UserAuth/AuthPage'


function NavBar() {
    return (
        <Router>
            <nav>
                <Link to='/'> Home </Link>
                <Link to='/hospitals'> Hospitals </Link>
                <Link to='/programs'> Programs </Link>
                <Link to='/user/:id/ranklist'> Ranklist </Link>
                <Link to='/user/:id/account'> Account </Link>
                <Link to='/login-signup'> Login</Link>
                <button> LOGOUT </button>
            </nav>
            <Routes>
                <Route exact path="/hospitals" element={<Hospitals />} />
                <Route exact path="/programs" element={<ProgramsPage />} />
                <Route exact path="/user/:id/ranklist" element={<Ranklist />} />
                <Route exact path="/user/:id/account" element={<UserAccount />} />
                <Route exact path="/login-signup" element={<AuthPage />} />
                <Route exact path="/" element={<Home />} />
            </Routes>
        </Router>
    )
}

export default NavBar
