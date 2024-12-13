// RomanNumeralConverter.js
import React, { useState } from 'react';

const RomanNumeralConverter = () => {
    const [number, setNumber] = useState('');
    const [roman, setRoman] = useState('');

    const convertToRoman = (num) => {
        const romanNumerals = [
            ['M', 1000],
            ['CM', 900],
            ['D', 500],
            ['CD', 400],
            ['C', 100],
            ['XC', 90],
            ['L', 50],
            ['XL', 40],
            ['X', 10],
            ['IX', 9],
            ['V', 5],
            ['IV', 4],
            ['I', 1]
        ];
        let result = '';
        for (const [letter, value] of romanNumerals) {
            while (num >= value) {
                result += letter;
                num -= value;
            }
        }
        return result;
    };

    const handleConvert = () => {
        const num = parseInt(number);
        if (num > 0) {
            setRoman(convertToRoman(num));
        } else {
            setRoman('');
        }
    };

    return (
        <div>
            <h1>Roman Numeral Converter</h1>
            <div>
                <input
                    type="number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    placeholder="Enter a number"
                />
                <button onClick={handleConvert}>Convert</button>
            </div>
            {roman && (
                <div>
                    <h2>Roman Numeral: {roman}</h2>
                </div>
            )}
        </div>
    );
};

export default RomanNumeralConverter;