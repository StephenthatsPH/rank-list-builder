import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AuthPage from './UserAuth/AuthPage'
import Home from './Home';
import About from './About';
import ProgramsPage from './Programs/ProgramsPage';
import ProgramCard from './Programs/ProgramCard';
import NewReview from './Programs/Reviews/NewReview';
import ReviewsList from './Programs/Reviews/ReviewsList';
import Ranklist from './User/Ranklist';
import UserAccount from './User/UserAccount';
import { HospitalProvider } from '../context/hospitalsContext';
import { ProgramProvider } from '../context/programsContext';
import { ReviewProvider } from '../context/reviewsContext';


function NavBar({ currentUser }) {
    console.log(currentUser)
    if (currentUser == true) {
        return (
            <ReviewProvider><ProgramProvider><HospitalProvider>
            <Router>
                <nav>
                    <Link to='/'> Home </Link>
                    <Link to='/About'> About </Link>
                    <Link to='/programs'> Programs </Link>
                    <Link to='/user/:id/ranklist'> Ranklist </Link>
                    <Link to='/user/:id/account'> Account </Link>
                    <button> LOGOUT </button>
                </nav>
                <Routes>
                    <Route exact path="/about" element={<About />} />
                    <Route exact path="/programs" element={<ProgramsPage />} />
                    <Route exact path="/programs/:id/overview" element={[<ProgramCard/>, <NewReview/>, <ReviewsList/>]} />
                    <Route exact path="/user/:id/ranklist" element={<Ranklist />} />
                    <Route exact path="/user/:id/account" element={<UserAccount />} />
                    <Route exact path="/" element={<Home />} />
                </Routes>
            </Router>
            </HospitalProvider></ProgramProvider></ReviewProvider>
        )
    } else {
        return (
            <Router>
                <nav>
                    <Link to='/'> Home </Link>
                    <Link to='/About'> About </Link>
                    <Link to='/programs'> Programs </Link>
                    <Link to='/login-signup'> Login</Link>
                </nav>
                <Routes>
                    <Route exact path="/about" element={<About />} />
                    <Route exact path="/programs" element={<ProgramsPage />} />
                    <Route exact path="/login-signup" element={<AuthPage />} />
                    <Route exact path="/" element={<Home />} />
                </Routes>
            </Router>
        )
    }
}

export default NavBar
