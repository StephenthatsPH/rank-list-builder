import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import UserSettings from './UserAuth/UserSettings';
import Home from './Home';
import ProgramsPage from './ProgramsPage';
import Ranklist from './Ranklist';


function Header() {
    return (
        <Router>
            <nav>
                <Link to='/'> Home </Link>
                <Link to='/programs'> Programs </Link>
                <Link to='/user/:id/ranklist'> Ranklist </Link>
                <Link to='/user/:id/account'> Account </Link>
            </nav>
            <Routes>
                <Route exact path="/programs" element={<ProgramsPage />} />
                <Route exact path="/user/:id/ranklist" element={<Ranklist />} />
                <Route exact path="/user/:id/account" element={<UserSettings />} />
                <Route exact path="/" element={<Home />} />
            </Routes>
        </Router>
    )
}

export default Header
