import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from './Loading';
import './Navbar.css'

const Navbar = () => {
    // Toogle Menu
    const [Mobile, setMobile] = useState(false)
    const [user, loading] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    };
    if (loading) {
        return <Loading />
    }

    // fixed Header
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header")
        header.classList.toggle_part("active", window.scrollY > 100)
    })

    return (
        <>
            <header className='header'>
                <div className="d_flex md:px-7">
                    <div className="logo">
                        <h2>
                            <Link to="/" className='text-2xl '>Knowledge Teaching Home</Link>
                        </h2>
                    </div>

                    <div className="Links">
                        <ul className={Mobile ? "nav-links-mobile" : "links f_flex uppercase"} onClick={() => setMobile(false)}>
                            <li><Link to='/' className='text-xl '>Home</Link></li>
                            <li><Link to='/dashboard' className='text-xl '>Dashboard</Link></li>
                            <li><Link to='/about' className='text-xl '>About</Link></li>
                            <li><Link to='/contact' className='text-xl '>Contact</Link></li>
                            <li><Link to='/studentRegister' className='text-xl '>S. SignUp</Link></li>
                            <li> {
                                user ? <button onClick={logout} className='btn btn-Link btn-outline  text-decoration-none fs-5'>Sign out</button> : <Link to='/login' className='rounded-lg text-xl '>Login</Link>
                            } </li>
                        </ul>

                        <button className='toggle_part' onClick={() => setMobile(!Mobile)}>
                            {Mobile ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
                        </button>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Navbar;