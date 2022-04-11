import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Header = () => {
    const {user, handleSignOut} = useFirebase();
    return (
        <div className='header'>
            <nav>
                <Link to="/Home">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/others">Others</Link>
                <Link to="/register">Register</Link>
                <span>{user?.displayName && user.displayName}</span>
                {
                    user?.uid
                    ?
                    <button onClick={handleSignOut}>Sign Out</button>
                    :
                    <Link to="/login">Login</Link>
                }
            </nav>
        </div>
    );
};

export default Header;