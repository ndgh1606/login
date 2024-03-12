import React, { useState, useEffect } from 'react';
import './studentdashboard.css';

export const StudentDashboard = () => {
    const [tickets, setTickets] = useState([]);

    // Mock data for demonstration
    useEffect(() => {
        // Replace this with actual data fetching logic
        const mockData = [
            { id: 1, title: 'Ticket 1', description: 'Description of Ticket 1' },
            { id: 2, title: 'Ticket 2', description: 'Description of Ticket 2' },
            { id: 3, title: 'Ticket 3', description: 'Description of Ticket 3' },
        ];
        setTickets(mockData);
    }, []);

    return (
        <div>
            <h1>Student Dashboard</h1>
            <div>
                {tickets.length === 0 ? (
                    <p>No tickets available</p>
                ) : (
                    <ul>
                        {tickets.map(ticket => (
                            <li key={ticket.id}>
                                <h2>{ticket.title}</h2>
                                <p>{ticket.description}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default StudentDashboard;
