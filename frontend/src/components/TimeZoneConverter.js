// TimeZoneConverter.js
import React, { useState } from 'react';

const TimeZoneConverter = () => {
    const [time, setTime] = useState('');
    const [fromTimeZone, setFromTimeZone] = useState('UTC');
    const [toTimeZone, setToTimeZone] = useState('UTC');
    const [convertedTime, setConvertedTime] = useState('');

    const timeZones = [
        'UTC', 'GMT', 'EST', 'CST', 'MST', 'PST', 'IST', 'CET', 'EET', 'JST'
    ];

    const convertTime = () => {
        const date = new Date(`1970-01-01T${time}:00Z`);
        const options = { timeZone: toTimeZone, hour: '2-digit', minute: '2-digit', second: '2-digit' };
        const formatter = new Intl.DateTimeFormat([], options);
        setConvertedTime(formatter.format(date));
    };

    return (
        <div>
            <h1>Time Zone Converter</h1>
            <div>
                <input
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                />
                <select
                    value={fromTimeZone}
                    onChange={(e) => setFromTimeZone(e.target.value)}
                >
                    {timeZones.map((zone) => (
                        <option key={zone} value={zone}>{zone}</option>
                    ))}
                </select>
                <button onClick={convertTime}>Convert</button>
                <select
                    value={toTimeZone}
                    onChange={(e) => setToTimeZone(e.target.value)}
                >
                    {timeZones.map((zone) => (
                        <option key={zone} value={zone}>{zone}</option>
                    ))}
                </select>
            </div>
            {convertedTime && (
                <div>
                    <h2>Converted Time: {convertedTime}</h2>
                </div>
            )}
        </div>
    );
};

export default TimeZoneConverter;