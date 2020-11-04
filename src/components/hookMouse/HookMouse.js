import React, { useState, useEffect } from 'react';
import style from './HookMouse.module.css';

function HookMouse() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMousePosition = event => {
        setX(event.clientX);
        setY(event.clientY);
    }

    // Run the effect only once: 
    useEffect(() => {
        window.addEventListener('mousemove', logMousePosition);
        // Cleanup:
        return () => window.removeEventListener('mousemove', logMousePosition);
    }, []);

    return (
        <div className = { style.hookMouse }>
            <p>X: { x } Y: { y }</p>
        </div>
    );
}

export default HookMouse;
