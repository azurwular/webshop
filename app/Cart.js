'use client'; // This directive allows the component to use hooks like useState.

import React from 'react';
import styles from '../styles/Home.module.css';

const Cart = ({ cart, onRemoveFromCart }) => {
    return (
        <div className={styles.cart}>
            <h2>Shopping Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cart.map((item, index) => (
                        <li key={index} className={styles.cartItem}>
                            {item.name} - ${item.price.toFixed(2)}
                            <button onClick={() => onRemoveFromCart(item.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;
