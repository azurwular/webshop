'use client'; // This directive allows the component to use hooks like useState.

import React, { useState } from 'react';
import styles from '../styles/Home.module.css';
import Cart from './Cart'; // Import the Cart component

const ProductList = () => {
    // Hardcoded product data
    const products = [
        { id: 1, name: 'Product 1', price: 29.99, description: 'Description of Product 1' },
        { id: 2, name: 'Product 2', price: 39.99, description: 'Description of Product 2' },
        { id: 3, name: 'Product 3', price: 49.99, description: 'Description of Product 3' },
        { id: 4, name: 'Product 4', price: 19.99, description: 'Description of Product 4' },
    ];

    // State to manage cart items
    const [cart, setCart] = useState([]);

    // Function to handle adding products to the cart
    const handleAddToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
        alert(`${product.name} has been added to your cart!`);
    };

    // Function to remove items from the cart
    const handleRemoveFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter(item => item.id !== productId));
    };

    return (
        <div>
            <h1 className={styles.title}>Products</h1>
            {products.length === 0 ? (
                <p>No products available.</p>
            ) : (
                <ul className={styles.productList}>
                    {products.map((product) => (
                        <li key={product.id} className={styles.productItem}>
                            <strong>{product.name}</strong> - ${product.price.toFixed(2)}
                            <p>{product.description}</p>
                            <button 
                                className={styles.addToCartButton} 
                                onClick={() => handleAddToCart(product)}
                            >
                                Add to Cart
                            </button>
                        </li>
                    ))}
                </ul>
            )}
            <Cart cart={cart} onRemoveFromCart={handleRemoveFromCart} />
        </div>
    );
};

export default ProductList;
