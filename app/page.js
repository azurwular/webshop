import React from 'react';
import ProductList from './ProductList'; // Import the ProductList component
import Cart from './Cart'; //import Cart component
import styles from '../styles/Home.module.css';

const Home = () => {
    return (
        <div>
            <h1 className={styles.title}>Welcome to the Webshop</h1>
            <ProductList />  {/* Render the ProductList component */}
        </div>
    );
};

export default Home;
