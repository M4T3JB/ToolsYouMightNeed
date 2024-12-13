// SpeedConverter.js
import React, { useState } from 'react';
import './Common.css';

const SpeedConverter = () => {
    const [inputValue, setInputValue] = useState('');
    const [inputUnit, setInputUnit] = useState('Kilometers per hour');
    const [outputUnit, setOutputUnit] = useState('Miles per hour');
    const [outputValue, setOutputValue] = useState('');

    const convertSpeed = () => {
        let convertedValue;

        if (inputUnit === 'Kilometers per hour') {
            if (outputUnit === 'Miles per hour') {
                convertedValue = inputValue * 0.621371;
            } else if (outputUnit === 'Meters per second') {
                convertedValue = inputValue / 3.6;
            } else if (outputUnit === 'Feet per second') {
                convertedValue = inputValue * 0.911344;
            } else if (outputUnit === 'Knots' || outputUnit === 'Nautical miles per hour') {
                convertedValue = inputValue * 0.539957;
            } else {
                convertedValue = inputValue;
            }
        } else if (inputUnit === 'Miles per hour') {
            if (outputUnit === 'Kilometers per hour') {
                convertedValue = inputValue / 0.621371;
            } else if (outputUnit === 'Meters per second') {
                convertedValue = inputValue / 2.23694;
            } else if (outputUnit === 'Feet per second') {
                convertedValue = inputValue * 1.46667;
            } else if (outputUnit === 'Knots' || outputUnit === 'Nautical miles per hour') {
                convertedValue = inputValue * 0.868976;
            } else {
                convertedValue = inputValue;
            }
        } else if (inputUnit === 'Meters per second') {
            if (outputUnit === 'Kilometers per hour') {
                convertedValue = inputValue * 3.6;
            } else if (outputUnit === 'Miles per hour') {
                convertedValue = inputValue * 2.23694;
            } else if (outputUnit === 'Feet per second') {
                convertedValue = inputValue * 3.28084;
            } else if (outputUnit === 'Knots' || outputUnit === 'Nautical miles per hour') {
                convertedValue = inputValue * 1.94384;
            } else {
                convertedValue = inputValue;
            }
        } else if (inputUnit === 'Feet per second') {
            if (outputUnit === 'Kilometers per hour') {
                convertedValue = inputValue / 0.911344;
            } else if (outputUnit === 'Miles per hour') {
                convertedValue = inputValue / 1.46667;
            } else if (outputUnit === 'Meters per second') {
                convertedValue = inputValue / 3.28084;
            } else if (outputUnit === 'Knots' || outputUnit === 'Nautical miles per hour') {
                convertedValue = inputValue * 0.592484;
            } else {
                convertedValue = inputValue;
            }
        } else if (inputUnit === 'Knots' || inputUnit === 'Nautical miles per hour') {
            if (outputUnit === 'Kilometers per hour') {
                convertedValue = inputValue / 0.539957;
            } else if (outputUnit === 'Miles per hour') {
                convertedValue = inputValue / 0.868976;
            } else if (outputUnit === 'Meters per second') {
                convertedValue = inputValue / 1.94384;
            } else if (outputUnit === 'Feet per second') {
                convertedValue = inputValue / 0.592484;
            } else {
                convertedValue = inputValue;
            }
        }

        setOutputValue(convertedValue.toFixed(2));
    };

    return (
        <div className="tool-container">
            <h1>Speed Converter</h1>
            <input
                type="number"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter speed"
            />
            <select
                value={inputUnit}
                onChange={(e) => setInputUnit(e.target.value)}
            >
                <option value="Kilometers per hour">Kilometers per hour</option>
                <option value="Miles per hour">Miles per hour</option>
                <option value="Meters per second">Meters per second</option>
                <option value="Feet per second">Feet per second</option>
                <option value="Knots">Knots</option>
                <option value="Nautical miles per hour">Nautical miles per hour</option>
            </select>
            <button onClick={convertSpeed}>Convert</button>
            <select
                value={outputUnit}
                onChange={(e) => setOutputUnit(e.target.value)}
            >
                <option value="Kilometers per hour">Kilometers per hour</option>
                <option value="Miles per hour">Miles per hour</option>
                <option value="Meters per second">Meters per second</option>
                <option value="Feet per second">Feet per second</option>
                <option value="Knots">Knots</option>
                <option value="Nautical miles per hour">Nautical miles per hour</option>
            </select>
            {outputValue && (
                <div className="result">
                    Converted Speed: {outputValue} {outputUnit}
                </div>
            )}
        </div>
    );
};

export default SpeedConverter;