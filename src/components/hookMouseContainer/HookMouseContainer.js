import React, { useState } from 'react';
import style from './HookMouseContainer.module.css';
import HookMouse from '../hookMouse/HookMouse';

function HookMouseContainer() {
    const [display, setDisplay] = useState(true);

    const toggleDisplay = () => {
        setDisplay(prevDisplay => !prevDisplay);
    }

    return (
        <div className = { style.hookMouseContainer }>
            <button onClick = { toggleDisplay }>Toggle</button>
            { display && <HookMouse/> }
        </div>
    );
}

export default HookMouseContainer;
