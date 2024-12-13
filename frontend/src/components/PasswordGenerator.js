// PasswordGenerator.js
import React, { useState } from 'react';
import './Common.css';

const PasswordGenerator = () => {
    const [length, setLength] = useState(12);
    const [includeUppercase, setIncludeUppercase] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSymbols, setIncludeSymbols] = useState(true);
    const [password, setPassword] = useState('');

    const generatePassword = () => {
        const lowercase = 'abcdefghijklmnopqrstuvwxyz';
        const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numbers = '0123456789';
        const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
        let characters = lowercase;
        if (includeUppercase) characters += uppercase;
        if (includeNumbers) characters += numbers;
        if (includeSymbols) characters += symbols;

        let generatedPassword = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            generatedPassword += characters[randomIndex];
        }
        setPassword(generatedPassword);
    };

    return (
        <div className="tool-container">
            <h1>Password Generator</h1>
            <label>
                Length:
                <input
                    type="number"
                    value={length}
                    onChange={(e) => setLength(e.target.value)}
                    min="1"
                />
            </label>
            <label>
                <input
                    type="checkbox"
                    checked={includeUppercase}
                    onChange={(e) => setIncludeUppercase(e.target.checked)}
                />
                Include Uppercase
            </label>
            <label>
                <input
                    type="checkbox"
                    checked={includeNumbers}
                    onChange={(e) => setIncludeNumbers(e.target.checked)}
                />
                Include Numbers
            </label>
            <label>
                <input
                    type="checkbox"
                    checked={includeSymbols}
                    onChange={(e) => setIncludeSymbols(e.target.checked)}
                />
                Include Symbols
            </label>
            <button onClick={generatePassword}>Generate Password</button>
            {password && (
                <div className="result">
                    Generated Password: {password}
                </div>
            )}
        </div>
    );
};

export default PasswordGenerator;