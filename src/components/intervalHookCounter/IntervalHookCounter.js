import React, { useState, useEffect } from 'react';
import style from './IntervalHookCounter.module.css';

function IntervalHookCounter() {
    const [count, setCount] = useState(0);

    const tick = () => {
        setCount(prevCount => prevCount + 1);
    }

    useEffect(() => {
        const interval = setInterval(tick, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className = { style.intervalHookCounter }>
            <p>{ count }</p>
        </div>
    );
}

export default IntervalHookCounter;
