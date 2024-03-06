import React, { useState } from 'react';
import './LoginSignup.css';
import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';
import { Link } from 'react-router-dom'; // Import Link from React Router

export const Loginsignup = () => {
    const [action, setAction] = useState('Sign up');
    const handleActionChange = (newAction) => {
        setAction(newAction);
    };
    return (
        <div className='container'>
            <div className='header'>
                <div className="text">{action}</div>
                <div className="underline"></div>
                <Link to="/admin" className="admin-link">Admin Dashboard</Link>
          
            </div>
            <div className="inputs">
                {action==='Login'?<div></div>:<div className="input">
                    <img src={user_icon} alt="" />
                    <input type="text" placeholder='Name'/>
                </div>}
                
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

                <div className="submit-container">
                <div className={action === "Login" ? 'submit gray' : 'submit'} onClick={() => handleActionChange('Sign up')}>Sign Up</div>
                <div className={action === 'Sign up' ? 'submit gray' : 'submit'} onClick={() => handleActionChange('Login')}>Login</div>
            </div>
        </div>
    );
};

export default Loginsignup;
