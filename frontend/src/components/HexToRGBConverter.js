// HexToRGBConverter.js
import React, { useState } from 'react';
import './Common.css';

const HexToRGBConverter = () => {
    const [hex, setHex] = useState('');
    const [rgb, setRgb] = useState('');

    const convertHexToRgb = (hex) => {
        const bigint = parseInt(hex.replace('#', ''), 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;
        return `rgb(${r}, ${g}, ${b})`;
    };

    const handleConvert = () => {
        if (/^#([0-9A-F]{3}){1,2}$/i.test(hex)) {
            setRgb(convertHexToRgb(hex));
        } else {
            setRgb('Invalid Hex Code');
        }
    };

    return (
        <div className="tool-container">
            <h1>Hex to RGB Converter</h1>
            <input
                type="text"
                value={hex}
                onChange={(e) => setHex(e.target.value)}
                placeholder="Enter hex code"
            />
            <button onClick={handleConvert}>Convert</button>
            {rgb && (
                <div className="result">
                    RGB: {rgb}
                </div>
            )}
        </div>
    );
};

export default HexToRGBConverter;