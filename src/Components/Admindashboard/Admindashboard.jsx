import React, { useState } from 'react';
import './Admindashboard.css';

export const Admindashboard = () => {
    const [showCreateAccountForm, setShowCreateAccountForm] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleToggleCreateAccountForm = () => {
        setShowCreateAccountForm(!showCreateAccountForm);
    };

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // TODO: Handle form submission (e.g., validate inputs, send data to server)
    };

    return (
        <div className='admin-container'>
            <div className="sidebar">
                <h2>Admin Dashboard</h2>
                <ul>
                    <li>
                        <button onClick={handleToggleCreateAccountForm}>Create Account</button>
                    </li>
                </ul>
            </div>
            <div className="content">
                {showCreateAccountForm && (
                    <div className="create-account-form">
                        <h3>Create New Account</h3>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="username">Username:</label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={handleUsernameChange}
                                required
                            />
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={handlePasswordChange}
                                required
                            />
                            <label htmlFor="confirmPassword">Confirm Password:</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                value={confirmPassword}
                                onChange={handleConfirmPasswordChange}
                                required
                            />
                            <button type="submit">Register</button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Admindashboard;
