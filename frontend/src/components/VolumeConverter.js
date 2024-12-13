// VolumeConverter.js
import React, { useState } from 'react';
import './Common.css';

const VolumeConverter = () => {
    const [inputValue, setInputValue] = useState('');
    const [inputUnit, setInputUnit] = useState('liters');
    const [outputUnit, setOutputUnit] = useState('milliliters');
    const [outputValue, setOutputValue] = useState('');

    const convertVolume = () => {
        // Conversion logic here
        setOutputValue((inputValue * 1000).toFixed(2)); // Example conversion rate
    };

    return (
        <div className="tool-container">
            <h1>Volume Converter</h1>
            <input
                type="number"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter volume"
            />
            <select
                value={inputUnit}
                onChange={(e) => setInputUnit(e.target.value)}
            >
                <option value="liters">Liters</option>
                <option value="milliliters">Milliliters</option>
                {/* Add more units */}
            </select>
            <select
                value={outputUnit}
                onChange={(e) => setOutputUnit(e.target.value)}
            >
                <option value="milliliters">Milliliters</option>
                <option value="liters">Liters</option>
                {/* Add more units */}
            </select>
            <button onClick={convertVolume}>Convert</button>
            {outputValue && (
                <div className="result">
                    Converted Volume: {outputValue} {outputUnit}
                </div>
            )}
        </div>
    );
};

export default VolumeConverter;