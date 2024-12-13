// WeightConverter.js
import React, { useState } from 'react';
import './Common.css';

const WeightConverter = () => {
    const [inputValue, setInputValue] = useState('');
    const [inputUnit, setInputUnit] = useState('Kilograms');
    const [outputUnit, setOutputUnit] = useState('Pounds');
    const [outputValue, setOutputValue] = useState('');

    const convertWeight = () => {
        let convertedValue;

        if (inputUnit === 'Kilograms') {
            if (outputUnit === 'Pounds') {
                convertedValue = inputValue * 2.20462;
            } else if (outputUnit === 'Grams') {
                convertedValue = inputValue * 1000;
            } else if (outputUnit === 'Ounces') {
                convertedValue = inputValue * 35.274;
            } else if (outputUnit === 'Stones') {
                convertedValue = inputValue * 0.157473;
            } else if (outputUnit === 'Metric Tons') {
                convertedValue = inputValue * 0.001;
            } else {
                convertedValue = inputValue;
            }
        } else if (inputUnit === 'Pounds') {
            if (outputUnit === 'Kilograms') {
                convertedValue = inputValue / 2.20462;
            } else if (outputUnit === 'Grams') {
                convertedValue = inputValue * 453.592;
            } else if (outputUnit === 'Ounces') {
                convertedValue = inputValue * 16;
            } else if (outputUnit === 'Stones') {
                convertedValue = inputValue * 0.0714286;
            } else if (outputUnit === 'Metric Tons') {
                convertedValue = inputValue / 2204.62;
            } else {
                convertedValue = inputValue;
            }
        } else if (inputUnit === 'Grams') {
            if (outputUnit === 'Kilograms') {
                convertedValue = inputValue / 1000;
            } else if (outputUnit === 'Pounds') {
                convertedValue = inputValue / 453.592;
            } else if (outputUnit === 'Ounces') {
                convertedValue = inputValue / 28.3495;
            } else if (outputUnit === 'Stones') {
                convertedValue = inputValue / 6350.29;
            } else if (outputUnit === 'Metric Tons') {
                convertedValue = inputValue / 1e+6;
            } else {
                convertedValue = inputValue;
            }
        } else if (inputUnit === 'Ounces') {
            if (outputUnit === 'Kilograms') {
                convertedValue = inputValue / 35.274;
            } else if (outputUnit === 'Pounds') {
                convertedValue = inputValue / 16;
            } else if (outputUnit === 'Grams') {
                convertedValue = inputValue * 28.3495;
            } else if (outputUnit === 'Stones') {
                convertedValue = inputValue / 224;
            } else if (outputUnit === 'Metric Tons') {
                convertedValue = inputValue / 35274;
            } else {
                convertedValue = inputValue;
            }
        } else if (inputUnit === 'Stones') {
            if (outputUnit === 'Kilograms') {
                convertedValue = inputValue / 0.157473;
            } else if (outputUnit === 'Pounds') {
                convertedValue = inputValue * 14;
            } else if (outputUnit === 'Grams') {
                convertedValue = inputValue * 6350.29;
            } else if (outputUnit === 'Ounces') {
                convertedValue = inputValue * 224;
            } else if (outputUnit === 'Metric Tons') {
                convertedValue = inputValue / 157.473;
            } else {
                convertedValue = inputValue;
            }
        } else if (inputUnit === 'Metric Tons') {
            if (outputUnit === 'Kilograms') {
                convertedValue = inputValue * 1000;
            } else if (outputUnit === 'Pounds') {
                convertedValue = inputValue * 2204.62;
            } else if (outputUnit === 'Grams') {
                convertedValue = inputValue * 1e+6;
            } else if (outputUnit === 'Ounces') {
                convertedValue = inputValue * 35274;
            } else if (outputUnit === 'Stones') {
                convertedValue = inputValue * 157.473;
            } else {
                convertedValue = inputValue;
            }
        }

        setOutputValue(convertedValue.toFixed(2));
    };

    return (
        <div className="tool-container">
            <h1>Weight Converter</h1>
            <input
                type="number"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter weight"
            />
            <select
                value={inputUnit}
                onChange={(e) => setInputUnit(e.target.value)}
            >
                <option value="Kilograms">Kilograms</option>
                <option value="Pounds">Pounds</option>
                <option value="Grams">Grams</option>
                <option value="Ounces">Ounces</option>
                <option value="Stones">Stones</option>
                <option value="Metric Tons">Metric Tons</option>
            </select>
            <button onClick={convertWeight}>Convert</button>
            <select
                value={outputUnit}
                onChange={(e) => setOutputUnit(e.target.value)}
            >
                <option value="Kilograms">Kilograms</option>
                <option value="Pounds">Pounds</option>
                <option value="Grams">Grams</option>
                <option value="Ounces">Ounces</option>
                <option value="Stones">Stones</option>
                <option value="Metric Tons">Metric Tons</option>
            </select>
            {outputValue && (
                <div className="result">
                    Converted Value: {outputValue} {outputUnit}
                </div>
            )}
        </div>
    );
};

export default WeightConverter;