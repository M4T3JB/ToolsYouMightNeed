// AreaConverter.js
import React, { useState } from 'react';
import './Common.css';

const AreaConverter = () => {
    const [inputValue, setInputValue] = useState('');
    const [inputUnit, setInputUnit] = useState('square meters');
    const [outputUnit, setOutputUnit] = useState('square kilometers');
    const [outputValue, setOutputValue] = useState('');

    const convertArea = () => {
        // Conversion logic here
        setOutputValue((inputValue / 1e6).toFixed(2)); // Example conversion rate
    };

    return (
        <div className="tool-container">
            <h1>Area Converter</h1>
            <input
                type="number"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter area"
            />
            <select
                value={inputUnit}
                onChange={(e) => setInputUnit(e.target.value)}
            >
                <option value="square meters">Square Meters</option>
                <option value="square kilometers">Square Kilometers</option>
                {/* Add more units */}
            </select>
            <select
                value={outputUnit}
                onChange={(e) => setOutputUnit(e.target.value)}
            >
                <option value="square kilometers">Square Kilometers</option>
                <option value="square meters">Square Meters</option>
                {/* Add more units */}
            </select>
            <button onClick={convertArea}>Convert</button>
            {outputValue && (
                <div className="result">
                    Converted Area: {outputValue} {outputUnit}
                </div>
            )}
        </div>
    );
};

export default AreaConverter;