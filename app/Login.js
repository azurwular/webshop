'use client'; // This directive allows the component to use hooks like useState.

import React, { useState } from 'react';
import styles from '../styles/Home.module.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Simulate login logic (replace with your actual login logic)
        if (username === "admin" && password === "password") {
            setMessage("Login successful!");
            // Here you could also redirect the user or perform other actions.
        } else {
            setMessage("Invalid username or password.");
        }
    };

    return (
        <div className={styles.loginContainer}>
            <h2>Login</h2>
            {message && <p>{message}</p>}
            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className={styles.loginButton}>Log in</button>
            </form>
        </div>
    );
};

export default Login;
