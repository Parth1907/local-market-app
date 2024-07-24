'use client'
import React, { useState, FormEvent } from 'react'
import Footer from "../ui/footer"
import "../ui/style.css"

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            console.error("Passwords dont match");
            return;
        }
        const response = await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password }),
        })
        const data = await response.json();
        console.log(data);
    }
    return (
        <>
            <div className="container">
                <form className="form" onSubmit={handleSubmit}>
                    <h2>Sign Up</h2>
                    {/* Vendor Sign Up */}
                    {/* <input type="text" placeholder="Business Name" required />
                    <input type="text" placeholder="Contact Person" required />
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                    <textarea placeholder="Business Description" rows={4}></textarea>
                    <input type="text" placeholder="Location" required />
                    <input type="text" placeholder="Payment Methods Accepted" required />
                    <input type="text" placeholder="Shipping Methods Available" required />
                    <input type="text" placeholder="Delivery Areas" required />
                    <button type="submit">Sign Up</button> */}


                    <input
                        type="text"
                        placeholder="Name"
                        required value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        required value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                    />
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm Password"
                        required
                    />
                    <button type="submit">Sign Up</button>

                    <p>Already have an account? <a href="/login">Sign In</a></p>
                </form>
            </div>
            <Footer />
        </>
    )
}
