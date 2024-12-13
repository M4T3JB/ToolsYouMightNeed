// DateDifferenceCalculator.js
import React, { useState } from 'react';
import './Common.css';

const DateDifferenceCalculator = () => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [difference, setDifference] = useState('');

    const calculateDifference = () => {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const diffTime = Math.abs(end - start);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        setDifference(diffDays);
    };

    return (
        <div className="tool-container">
            <h1>Date Difference Calculator</h1>
            <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                placeholder="Start Date"
            />
            <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                placeholder="End Date"
            />
            <button onClick={calculateDifference}>Calculate Difference</button>
            {difference && (
                <div className="result">
                    Difference: {difference} days
                </div>
            )}
        </div>
    );
};

export default DateDifferenceCalculator;