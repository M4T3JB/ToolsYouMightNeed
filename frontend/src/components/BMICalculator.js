// BMICalculator.js
import React, { useState } from 'react';
import './Common.css';

const BMICalculator = () => {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [bmi, setBmi] = useState(null);

    const calculateBMI = () => {
        const heightInMeters = height / 100;
        const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
        setBmi(bmiValue);
    };

    return (
        <div className="tool-container">
            <h1>BMI Calculator</h1>
            <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="Height (cm)"
            />
            <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Weight (kg)"
            />
            <button onClick={calculateBMI}>Calculate BMI</button>
            {bmi && (
                <div className="result">
                    Your BMI: {bmi}
                </div>
            )}
        </div>
    );
};

export default BMICalculator;