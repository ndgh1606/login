import React from 'react'
import './Admindashboard.css'
export const Admindashboard = () => {
  return (
    <div className='admin-container'>
        <div className="sidebar">
            <h2>Admin Dashboard</h2>
            <ul>
                <li>Create Account</li>
            </ul>
        </div>
        <div className="content"></div>
    </div>
  )
}

export default Admindashboard;
