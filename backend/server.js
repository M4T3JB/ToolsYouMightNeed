const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Home route for testing
app.get('/', (req, res) => {
    res.send('Node.js server is running!');
});

// Currency conversion route
app.get('/convert', async (req, res) => {
    const { from, to, amount } = req.query;

    if (!from || !to || !amount) {
        return res.status(400).send('Missing query parameters: from, to, and amount are required.');
    }

    try {
        // Replace this API with your choice of currency exchange API
        const response = await axios.get(
            `https://api.exchangerate-api.com/v4/latest/${from}`
        );

        const rate = response.data.rates[to];
        if (!rate) {
            return res.status(400).send('Invalid currency code.');
        }

        const convertedAmount = rate * amount;
        res.json({ from, to, amount, convertedAmount });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching conversion rate');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
