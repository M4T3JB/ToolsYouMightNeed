// TipCalculator.js
import React, { useState } from 'react';
import './Common.css';

const TipCalculator = () => {
    const [billAmount, setBillAmount] = useState('');
    const [tipPercentage, setTipPercentage] = useState('');
    const [tipAmount, setTipAmount] = useState(null);
    const [totalAmount, setTotalAmount] = useState(null);

    const calculateTip = () => {
        const tip = (billAmount * (tipPercentage / 100)).toFixed(2);
        const total = (parseFloat(billAmount) + parseFloat(tip)).toFixed(2);
        setTipAmount(tip);
        setTotalAmount(total);
    };

    return (
        <div className="tool-container">
            <h1>Tip Calculator</h1>
            <input
                type="number"
                value={billAmount}
                onChange={(e) => setBillAmount(e.target.value)}
                placeholder="Bill Amount"
            />
            <input
                type="number"
                value={tipPercentage}
                onChange={(e) => setTipPercentage(e.target.value)}
                placeholder="Tip Percentage"
            />
            <button onClick={calculateTip}>Calculate Tip</button>
            {tipAmount && totalAmount && (
                <div className="result">
                    Tip Amount: ${tipAmount}<br />
                    Total Amount: ${totalAmount}
                </div>
            )}
        </div>
    );
};

export default TipCalculator;