const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Generate the user_id based on your information
const user_id = "shreyansh_pandey_08072002";

// Route: /bfhl | Method: POST
app.post('/bfhl', (req, res) => {
    try {
        const data = req.body.data;
        
        // Extract alphabets and numbers from the input data
        const alphabets = data.filter(char => char.match(/[a-zA-Z]/));
        const numbers = data.filter(char => char.match(/[0-9]/));
        
        // Find the highest alphabet in the alphabets list
        const highest_alphabet = [alphabets.reduce((a, b) => a > b ? a : b, 'A')];
        
        const response_data = {
            is_success: true,
            user_id: user_id,
            email: "shreyansh.pandey2020@vitbhopal.ac.in",
            roll_number: "20BCE10404",
            numbers: numbers,
            alphabets: alphabets,
            highest_alphabet: highest_alphabet
        };
        
        res.status(200).json(response_data);
    } catch (error) {
        res.status(400).json({ is_success: false, error_message: error.message });
    }
});

// Route: /bfhl | Method: GET
app.get('/bfhl', (req, res) => {
    res.status(200).json({ operation_code: 1 });
});

// Start the Express server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
