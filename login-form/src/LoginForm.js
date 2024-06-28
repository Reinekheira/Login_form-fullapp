import React, { useState } from 'react';
import './LoginForm.css'; // Optional: for styling the form

const LoginForm = () => {
    const [formData, setFormData] = useState({
        // First Section
        title: '',
        firstname: '',
        lastname: '',
        position: '',
        company: '',
        businessArena: '',
        employees: '',

        // Second Section
        streetNr: '',
        additionalInfo: '',
        zipCode: '',
        place: '',
        country: '',
        code: '',
        phoneNumber: '',
        email: '',
        acceptTerms: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/api/tasks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to submit form');
            }

            const data = await response.json();
            console.log('Form Submitted Successfully:', data);

            // Clear form after successful submission (optional)
            setFormData({
                title: '',
                firstname: '',
                lastname: '',
                position: '',
                company: '',
                businessArena: '',
                employees: '',
                streetNr: '',
                additionalInfo: '',
                zipCode: '',
                place: '',
                country: '',
                code: '',
                phoneNumber: '',
                email: '',
                acceptTerms: false
            });

        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div className="login-form-container">
            {/* First Section */}
            <form onSubmit={handleSubmit} className="login-form">
                <h2>General Information</h2>
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group side-by-side">
                    <div className="form-group-half">
                        <label htmlFor="firstname">First Name:</label>
                        <input
                            type="text"
                            id="firstname"
                            name="firstname"
                            value={formData.firstname}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group-half">
                        <label htmlFor="lastname">Last Name:</label>
                        <input
                            type="text"
                            id="lastname"
                            name="lastname"
                            value={formData.lastname}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="position">Position:</label>
                    <input
                        type="text"
                        id="position"
                        name="position"
                        value={formData.position}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="company">Company:</label>
                    <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group side-by-side">
                    <div className="form-group-half">
                        <label htmlFor="businessArena">Business Arena:</label>
                        <input
                            type="text"
                            id="businessArena"
                            name="businessArena"
                            value={formData.businessArena}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group-half">
                        <label htmlFor="employees">Employees:</label>
                        <input
                            type="number"
                            id="employees"
                            name="employees"
                            value={formData.employees}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                
            </form>

            {/* Second Section */}
            <form onSubmit={handleSubmit} className="login-form2">
                <h2 className="h2">Contact Details</h2>
                <div className="form-group side-by-side">
                    <div className="form-group-half1">
                        <label htmlFor="streetNr">Street + Nr:</label>
                        <input
                            type="text"
                            id="streetNr"
                            name="streetNr"
                            value={formData.streetNr}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group-half1">
                        <label htmlFor="additionalInfo">Additional Info:</label>
                        <input
                            type="text"
                            id="additionalInfo"
                            name="additionalInfo"
                            value={formData.additionalInfo}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="form-group side-by-side1">
                    <div className="form-group-half1">
                        <label htmlFor="zipCode">Zip Code:</label>
                        <input
                            type="text"
                            id="zipCode"
                            name="zipCode"
                            value={formData.zipCode}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group-half1">
                        <label htmlFor="place">Place:</label>
                        <input
                            type="text"
                            id="place"
                            name="place"
                            value={formData.place}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="form-group1">
                    <label htmlFor="country">Country:</label>
                    <input
                        type="text"
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group side-by-side">
                    <div className="form-group-half1">
                        <label htmlFor="code">Code:</label>
                        <input
                            type="text"
                            id="code"
                            name="code"
                            value={formData.code}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group-half1">
                        <label htmlFor="phoneNumber">Phone Number:</label>
                        <input
                            type="text"
                            id="phoneNumber"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="form-group1">
                    <label htmlFor="email">Your Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group1">
                    <label>
                        <input
                            type="checkbox"
                            name="acceptTerms"
                            checked={formData.acceptTerms}
                            onChange={handleChange}
                            required
                        />
                        &nbsp; I accept the terms and conditions of your site
                    </label>
                </div>
                <button type="submit">Register Badge</button>
            </form>
        </div>
    );
};

export default LoginForm;
