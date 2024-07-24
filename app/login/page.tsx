'use client';
import React, { useState, FormEvent } from 'react'
import Footer from "../ui/footer"
import "../ui/style.css"

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        })
        const data = await response.json();
        console.log(data);
    }
    return (
        <>
            <div className="container">
                <form className="form" onSubmit={handleSubmit}>
                    <h2>Sign In</h2>
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
                    <button type="submit">Sign In</button>
                    <p>Don't have an account yet? <a href="/register">Sign Up</a></p>
                </form>
            </div>
            <Footer />
        </>
    )
}
