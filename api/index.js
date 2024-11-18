const express = require('express');
const cors = require('cors');
const app = express();

// Basic middleware
app.use(cors());
app.use(express.json());

// Test route
app.get('/api/test', (req, res) => {
    res.json({ message: 'API is working!' });
});

// POST route
app.post('/api/submit', (req, res) => {
    try {
        const data = req.body;
        console.log('Received data:', data);  // For debugging

        // Handle the data - this is where you'd add your logic
        // For example, saving to a database or processing the data

        res.status(200).json({
            success: true,
            message: 'Data received successfully',
            data: data
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
});

// Error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: 'Something went wrong!'
    });
});

module.exports = app;