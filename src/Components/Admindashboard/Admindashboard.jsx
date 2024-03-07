import React from 'react'
import './Admindashboard.css'
export const Admindashboard = () => {
  return (
    <div className='admin-container'>
        <div className="sidebar">
            <h2>Admin Dashboard</h2>
            <ul>
                <a href='./' className='admin-link'><li>Create Account</li></a> 
                
            </ul>
        </div>
        <div className="content"></div>
    </div>
  )
}

export default Admindashboard;
