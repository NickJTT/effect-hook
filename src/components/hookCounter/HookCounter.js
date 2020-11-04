import React, { useState, useEffect } from 'react';
import style from './HookCounter.module.css';

function HookCounter() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    }

    const userInput = event => {
        setName(event.target.value);
    }

    // Run the function only when the count value changes:
    useEffect(() => { document.title = `Clicked ${ count } times` }, [count]);

    return (
        <div className = { style.hookCounter }>
            <input type = 'text' name = 'name' value = { name } onChange = { userInput }/>
            <button onClick = { increment }>Increment</button>
        </div>
    );
}

export default HookCounter;
