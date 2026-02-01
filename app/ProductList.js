'use client'; // This directive allows the component to use hooks like useState.

import React from 'react';
import styles from '../styles/Home.module.css';

const ProductList = ({ onAddToCart }) => {
    // Hardcoded product data
    const products = [
        { id: 1, name: 'Product 1', price: 29.99, description: 'Description of Product 1' },
        { id: 2, name: 'Product 2', price: 39.99, description: 'Description of Product 2' },
        { id: 3, name: 'Product 3', price: 49.99, description: 'Description of Product 3' },
        { id: 4, name: 'Product 4', price: 19.99, description: 'Description of Product 4' },
    ];

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
                                onClick={() => onAddToCart(product)} 
                                className={styles.addToCartButton}  // Ensure correct class is used here
                            >
                                Add to Cart
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ProductList;
