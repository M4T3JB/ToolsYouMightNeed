// LoanCalculator.js
import React, { useState } from 'react';
import './Common.css';

const LoanCalculator = () => {
    const [principal, setPrincipal] = useState('');
    const [interestRate, setInterestRate] = useState('');
    const [term, setTerm] = useState('');
    const [monthlyPayment, setMonthlyPayment] = useState(null);
    const [totalPayment, setTotalPayment] = useState(null);
    const [totalInterest, setTotalInterest] = useState(null);

    const calculateLoan = () => {
        const principalAmount = parseFloat(principal);
        const monthlyInterestRate = parseFloat(interestRate) / 100 / 12;
        const numberOfPayments = parseFloat(term) * 12;

        const monthly = (principalAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
        const total = monthly * numberOfPayments;
        const interest = total - principalAmount;

        setMonthlyPayment(monthly.toFixed(2));
        setTotalPayment(total.toFixed(2));
        setTotalInterest(interest.toFixed(2));
    };

    return (
        <div className="tool-container">
            <h1>Loan Calculator</h1>
            <input
                type="number"
                value={principal}
                onChange={(e) => setPrincipal(e.target.value)}
                placeholder="Principal Amount"
            />
            <input
                type="number"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
                placeholder="Annual Interest Rate (%)"
            />
            <input
                type="number"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                placeholder="Term (years)"
            />
            <button onClick={calculateLoan}>Calculate Loan</button>
            {monthlyPayment && totalPayment && totalInterest && (
                <div className="result">
                    Monthly Payment: ${monthlyPayment}<br />
                    Total Payment: ${totalPayment}<br />
                    Total Interest: ${totalInterest}
                </div>
            )}
        </div>
    );
};

export default LoanCalculator;