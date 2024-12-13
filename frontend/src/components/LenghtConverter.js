// LengthConverter.js
import React, { useState } from 'react';
import './Common.css';

const LengthConverter = () => {
    const [inputValue, setInputValue] = useState('');
    const [inputUnit, setInputUnit] = useState('meters');
    const [outputUnit, setOutputUnit] = useState('kilometers');
    const [outputValue, setOutputValue] = useState('');

    const convertLength = () => {
        // Conversion logic here
        setOutputValue((inputValue / 1000).toFixed(2)); // Example conversion rate
    };

    return (
        <div className="tool-container">
            <h1>Length Converter</h1>
            <input
                type="number"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter length"
            />
            <select
                value={inputUnit}
                onChange={(e) => setInputUnit(e.target.value)}
            >
                <option value="meters">Meters</option>
                <option value="kilometers">Kilometers</option>
                {/* Add more units */}
            </select>
            <select
                value={outputUnit}
                onChange={(e) => setOutputUnit(e.target.value)}
            >
                <option value="kilometers">Kilometers</option>
                <option value="meters">Meters</option>
                {/* Add more units */}
            </select>
            <button onClick={convertLength}>Convert</button>
            {outputValue && (
                <div className="result">
                    Converted Length: {outputValue} {outputUnit}
                </div>
            )}
        </div>
    );
};

export default LengthConverter;