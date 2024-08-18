// import style from './Keyboard.module.css';
import { useState } from 'react';
import { KeyboardButton } from '../keyboardButton/KeyboardButton'

export function Keyboard () {
    const keyboardSymbols = 'qwertyuiopasdfghjklzxcvbnm';
    const [input, setInput] = useState('');

    const handleKeyPress = (symbol) => {
        setInput(input + symbol);
    };

    return (
        <div className="keyboard-container">
            <input type="text" value={input} readOnly />
            <div className="keyboard">
                keyboardSymbols.split('').toUpperCase().map(symbol => 
                    <KeyboardButton key={symbol} button={symbol} onClick={handleKeyPress} />
                );
            </div>
        </div>
    )
}

