// CurrencyConverter.js
import React, { useState, useEffect } from 'react';
import './Common.css';

const CurrencyConverter = () => {
    const [amount, setAmount] = useState('');
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('EUR');
    const [result, setResult] = useState('');
    const [currencies, setCurrencies] = useState([]);
    const [exchangeRates, setExchangeRates] = useState({});

    useEffect(() => {
        // Fetch the list of currencies and exchange rates
        const fetchCurrencies = async () => {
            try {
                const response = await fetch(`https://v6.exchangerate-api.com/v6/376b71e5a712151696a55e5b/latest/USD`);
                const data = await response.json();
                setCurrencies(Object.keys(data.conversion_rates));
                setExchangeRates(data.conversion_rates);
            } catch (error) {
                console.error('Error fetching exchange rates:', error);
            }
        };

        fetchCurrencies();
    }, []);

    const convertCurrency = () => {
        if (amount && fromCurrency && toCurrency) {
            const rate = exchangeRates[toCurrency] / exchangeRates[fromCurrency];
            setResult((amount * rate).toFixed(2));
        }
    };

    return (
        <div className="tool-container">
            <h1>Currency Converter</h1>
            <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
            />
            <select
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
            >
                {currencies.map((currency) => (
                    <option key={currency} value={currency}>
                        {currency}
                    </option>
                ))}
            </select>
            <select
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
            >
                {currencies.map((currency) => (
                    <option key={currency} value={currency}>
                        {currency}
                    </option>
                ))}
            </select>
            <button onClick={convertCurrency}>Convert</button>
            {result && (
                <div className="result">
                    Converted Amount: {result} {toCurrency}
                </div>
            )}
        </div>
    );
};

export default CurrencyConverter;