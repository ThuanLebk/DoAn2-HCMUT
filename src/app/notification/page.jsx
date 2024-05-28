"use client"
import React, { useEffect, useState } from 'react';

const NotiPage = () => {
    const [temperature, setTemperature] = useState(0);
    const [warnings, setWarnings] = useState([]); // State to store warnings

    useEffect(() => {
        const eventSource = new EventSource('/api/temperature');
        eventSource.onmessage = (event) => {
            const { temperature } = JSON.parse(event.data.temp.lastValue);
            setTemperature(temperature);
            
            if (temperature > 20) {
                const newWarning = {
                    id: Date.now(), // Unique id for key prop
                    message: `High temperature of ${temperature}°C detected at ${new Date().toLocaleTimeString()}.`
                };
                setWarnings(prevWarnings => [newWarning, ...prevWarnings]); // Prepend new warnings
            }
        };

        return () => eventSource.close();
    }, []);

    return (
        <div>
            <h1>Temperature Monitor</h1>
            <p>Current Temperature: {temperature}°C</p>
            <div>
                <h2>Warnings</h2>
                {warnings.length > 0 ? (
                    <ul>
                        {warnings.map(warning => (
                            <li key={warning.id}>{warning.message}</li>
                        ))}
                    </ul>
                ) : <p>No warnings.</p>}
            </div>
        </div>
    );
};

export default NotiPage;