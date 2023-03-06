import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import AuthPage from './UserAuth/AuthPage'
import Home from './Home';
import About from './About';
import ProgramsPage from './Programs/ProgramsPage';
import ProgramCard from './Programs/ProgramCard';
import NewReview from './Programs/Reviews/NewReview';
import ReviewsList from './Programs/Reviews/ReviewsList';
import Ranklist from './User/Ranklist/Ranklist';
import UserAccount from './User/Account/UserAccount';


function NavBar({ auth, user, handleLogout }) {

    if (auth === true) {
        return (
            <Router>
                <div className='nav'>
                    <nav className='nav-items'>
                        <Link to='/' className='nav-item'> Home </Link>
                        <Link to='/About' className='nav-item'> About </Link>
                        <Link to='/programs' className='nav-item'> Programs </Link>
                        <Link to={`/user/${user.id}/ranklist`} className='nav-item'> Ranklist </Link>
                        <Link to={`/user/${user.id}/account`} className='nav-item'> Account </Link>
                        <button onClick={handleLogout}> LOGOUT </button>
                    </nav>
                </div>
                <Routes>
                    <Route exact path="/about" element={<About />} />
                    <Route exact path="/programs" element={<ProgramsPage />} />
                    <Route exact path="/programs/:id/overview" element={[<ProgramCard />, <NewReview />, <ReviewsList />]} />
                    <Route exact path="/user/:id/ranklist" element={<Ranklist />} />
                    <Route exact path="/user/:id/account" element={<UserAccount />} />
                    <Route exact path="/" element={<Home />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </Router>
        )
    } else {
        return (
            <Router>
                <div className='nav'>
                    <nav className='nav-items'>
                        <Link to='/' className='nav-item'> Home </Link>
                        <Link to='/About' className='nav-item'> About </Link>
                        <Link to='/programs' className='nav-item'> Programs </Link>
                        <Link to='/login-signup' className='nav-item'> Login</Link>
                    </nav>
                </div>
                <Routes>
                    <Route exact path="/about" element={<About />} />
                    <Route exact path="/programs" element={<ProgramsPage />} />
                    <Route exact path="/programs/:id/overview" element={[<ProgramCard />, <ReviewsList />]} />
                    <Route exact path="/login-signup" element={<AuthPage />} />
                    <Route exact path="/" element={<Home />} />
                    <Route path="*" element={<Navigate to="/login-signup" replace />} />
                </Routes>
            </Router>
        )
    }
}

export default NavBar
