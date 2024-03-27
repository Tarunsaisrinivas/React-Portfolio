import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Details() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        fetchMessages();
    }, []); 

    const fetchMessages = async () => {
        try {
            const response = await axios.get('https://react-portfolio-1-hu4t.onrender.com/messages');
            setMessages(response.data);
        } catch (err) {
            console.error('Error fetching messages:', err);
        }
    };

    return (
        <div className="container px-4 py-8 mx-auto">
            <h2 className="mb-4 text-2xl font-bold">Messages:</h2>
            <div className="overflow-x-auto">
                <table className="w-full border border-collapse border-gray-500 table-auto">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="px-4 py-2 border border-gray-500">Name</th>
                            <th className="px-4 py-2 border border-gray-500">Email</th>
                            <th className="px-4 py-2 border border-gray-500">Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {messages.map((msg, index) => (
                            <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
                                <td className="px-4 py-2 border border-gray-500">{msg.name}</td>
                                <td className="px-4 py-2 border border-gray-500">{msg.email}</td>
                                <td className="px-4 py-2 border border-gray-500">{msg.message}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Details;
