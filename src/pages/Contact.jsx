import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Contact() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://tarunsaisrinivas.vercel.app/submit', formData);
            alert('Message submitted successfully!');
            setFormData({ name: '', email: '', message: '' });
        } catch (err) {
            alert('Error submitting message');
            console.error(err);
        }
    };

    return (
        <div id='contact' className="flex items-center justify-center min-h-screen bg-gray-800">
            <div className="w-5/6 p-8 mx-auto bg-gray-700 rounded-lg shadow-lg" data-aos="fade-down">
                <h1 className="mb-4 text-3xl font-semibold text-center text-white">Contact</h1>
                <form onSubmit={handleSubmit} autoComplete='off' className="space-y-4" >
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-white">Name:</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="block w-full p-2 mt-1 text-white bg-gray-600 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-white">Email:</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="block w-full p-2 mt-1 text-white bg-gray-600 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-white">Message:</label>
                        <textarea id="message" name="message" value={formData.message} onChange={handleChange} className="block w-full p-2 mt-1 text-white bg-gray-600 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"></textarea>
                    </div>
                    <button type="submit" className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
