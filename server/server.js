const express = require('express');
const cors = require('cors');
const redis = require('redis'); // Import Redis

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Create a Redis client
const redisClient = redis.createClient();
redisClient.on('error', (err) => {
    console.error(`Redis error: ${err}`);
});

// Define a route for the root path
app.get('/', (req, res) => {
    res.send('Welcome to the API!'); // Simple response for the root path
});

// Sample endpoint for products
app.get('/api/products', (req, res) => {
    redisClient.get('products', (err, products) => {
        if (err) {
            return res.status(500).send('Error retrieving products from Redis');
        }
        
        if (products) {
            // If products exist in cache, return them
            return res.json(JSON.parse(products));
        }

        // Simulate fetching products (replace with actual database call)
        const productsArray = [{ id: 1, name: 'Product 1', price: 100, description: 'Description of Product 1' }];
        
        // Save the products in Redis with an expiration time of 3600 seconds (1 hour)
        redisClient.setex('products', 3600, JSON.stringify(productsArray));

        return res.json(productsArray);
    });
});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});