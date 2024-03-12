import React from 'react';
import './App.css';
import Loginsignup from './Components/LoginSignup/Loginsignup';
import Admin from './Components/Admindashboard/Admindashboard';
import StudentDashboard from './Components/Studentdashboard/studentdashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Loginsignup />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/student" element={<StudentDashboard />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
