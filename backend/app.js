const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json());

// Use the routes for products and users
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/ecommerce').then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.error("MongoDB connection error:", err);
});

module.exports = app;
