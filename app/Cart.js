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
                    {cart.map((item) => (
                        <li key={item.id} className={styles.cartItem}>
                            <div>
                                <strong>{item.name}</strong> - ${item.price.toFixed(2)}
                            </div>
                            <button onClick={() => onRemoveFromCart(item.id)} className={styles.removeButton}>Remove</button> {/* Button under product details */}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;
