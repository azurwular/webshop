'use client'; // This line marks the entire file as a Client Component

import React, { useState } from 'react';
import ProductList from './ProductList'; // Import the ProductList component
import Cart from './Cart'; // Import the Cart component
import Users from './Login'; // Import the Users component
import styles from '../styles/Home.module.css';

const Home = () => {
    const [cart, setCart] = useState([]); // State to manage cart items

    // Function to handle adding products to the cart
    const handleAddToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]); // Adds selected product to the cart
        alert(`${product.name} has been added to your cart!`); // Alert the user
    };

    // Function to handle removing products from the cart
    const handleRemoveFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter(item => item.id !== productId)); // Removes product from cart
        alert(`Product removed from cart!`); // Alert the user
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Welcome to the Webshop</h1>
            <Users /> {/* Render the Users component for login */}
            <ProductList onAddToCart={handleAddToCart} /> {/* Pass the add function to ProductList */}
            <Cart cart={cart} onRemoveFromCart={handleRemoveFromCart} /> {/* Include the Cart component */}
        </div>
    );
};

export default Home;
