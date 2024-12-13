// TemperatureConverter.js
import React, { useState } from 'react';
import './Common.css';

const TemperatureConverter = () => {
    const [inputValue, setInputValue] = useState('');
    const [inputUnit, setInputUnit] = useState('Celsius');
    const [outputUnit, setOutputUnit] = useState('Fahrenheit');
    const [outputValue, setOutputValue] = useState('');

    const convertTemperature = () => {
        let convertedValue;
        if (inputUnit === 'Celsius') {
            if (outputUnit === 'Fahrenheit') {
                convertedValue = (inputValue * 9/5) + 32;
            } else if (outputUnit === 'Kelvin') {
                convertedValue = parseFloat(inputValue) + 273.15;
            } else {
                convertedValue = inputValue;
            }
        } else if (inputUnit === 'Fahrenheit') {
            if (outputUnit === 'Celsius') {
                convertedValue = (inputValue - 32) * 5/9;
            } else if (outputUnit === 'Kelvin') {
                convertedValue = ((inputValue - 32) * 5/9) + 273.15;
            } else {
                convertedValue = inputValue;
            }
        } else if (inputUnit === 'Kelvin') {
            if (outputUnit === 'Celsius') {
                convertedValue = inputValue - 273.15;
            } else if (outputUnit === 'Fahrenheit') {
                convertedValue = ((inputValue - 273.15) * 9/5) + 32;
            } else {
                convertedValue = inputValue;
            }
        }

        setOutputValue(convertedValue.toFixed(2));
    };

    return (
        <div className="tool-container">
            <h1>Temperature Converter</h1>
            <input
                type="number"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter temperature"
            />
            <select
                value={inputUnit}
                onChange={(e) => setInputUnit(e.target.value)}
            >
                <option value="Celsius">Celsius</option>
                <option value="Fahrenheit">Fahrenheit</option>
                <option value="Kelvin">Kelvin</option>
            </select>
            <button onClick={convertTemperature}>Convert</button>
            <select
                value={outputUnit}
                onChange={(e) => setOutputUnit(e.target.value)}
            >
                <option value="Celsius">Celsius</option>
                <option value="Fahrenheit">Fahrenheit</option>
                <option value="Kelvin">Kelvin</option>
            </select>
            {outputValue && (
                <div className="result">
                    Converted Value: {outputValue} {outputUnit}
                </div>
            )}
        </div>
    );
};

export default TemperatureConverter;