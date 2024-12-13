// PrimeNumberChecker.js
import React, { useState } from 'react';

const PrimeNumberChecker = () => {
    const [number, setNumber] = useState('');
    const [isPrime, setIsPrime] = useState(null);

    const checkPrime = () => {
        const num = parseInt(number);
        if (num <= 1) {
            setIsPrime(false);
            return;
        }
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                setIsPrime(false);
                return;
            }
        }
        setIsPrime(true);
    };

    return (
        <div>
            <h1>Prime Number Checker</h1>
            <div>
                <input
                    type="number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    placeholder="Enter a number"
                />
                <button onClick={checkPrime}>Check</button>
            </div>
            {isPrime !== null && (
                <div>
                    <h2>{number} is {isPrime ? 'a prime number' : 'not a prime number'}</h2>
                </div>
            )}
        </div>
    );
};

export default PrimeNumberChecker;