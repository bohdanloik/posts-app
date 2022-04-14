import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../UI/Button/Button';

const Header = () => {
    return (
        <header>
            <Link to='/'><Button>Users List</Button></Link>
        </header>
    );
};

export default Header;
