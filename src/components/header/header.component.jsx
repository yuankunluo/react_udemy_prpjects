import React from 'react';
import './header.styles.scss';

import {Link} from 'react-router-dom';
// Import SVG File direct as ReactComponent
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';

const Header = ({ currentUser }) => (
    <Link className='header'>
        <Link className='logo-container' to="/">
            <Logo className='logo' />
        </Link>

        <div className='options'>
            <Link className='option' to='/shop'>
                Shop
            </Link>
            <Link className='option' to='/shop'>
                Contact
            </Link>

            {
                currentUser ? 
                (<div 
                    className='option' 
                    onClick={() => auth.signOut()}>
                        Sign Out
                </div>) : 
                (<Link className='option' to='/signin'>Sign In</Link>)
            }
        </div>
    </Link>
);

export default Header;