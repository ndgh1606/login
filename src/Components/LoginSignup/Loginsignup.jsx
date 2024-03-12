import React, { useState } from 'react';
import './LoginSignup.css';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';
import { Link } from 'react-router-dom'; // Import Link from React Router

export const Loginsignup = () => {
    const [action, setAction] = useState('Login');

    return (
        <div className='container'>
            <div className='header'>
                <div className="text">{action}</div>
                <div className="underline"></div>
                <Link to="/admin" className="admin-link">Admin Dashboard</Link>
                <Link to='/student' className='student-link'>Student Dashboard</Link>
                <Link to='/contribution' className='contribution-link'>Contribution</Link>
            </div>
            <div className="inputs">
                <div className="input">
                    <img src={email_icon} alt="" />
                    <input type="email" placeholder='Email' />
                </div>
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder='Password' />
                </div>
            </div>
            {action === 'Login' && <div className="forgot-password">Lost Password? <span>Click Here</span></div>}
            {action === 'Login' && <div className="forgot-password">Login With Guess <span>Click Here</span></div>}

            <div className="submit-container">
                
                <div className={action === 'Sign up' ? 'submit gray' : 'submit'} onClick={() => setAction('Login')}>Login</div>
            </div>
        </div>
    );
};

export default Loginsignup;
