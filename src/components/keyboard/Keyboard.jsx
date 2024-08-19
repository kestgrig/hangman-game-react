/* eslint-disable react/prop-types */
import style from './Keyboard.module.css';

import { KeyboardButton } from '../keyboardButton/KeyboardButton';

export function Keyboard (props) {
    const keyboardSymbols = 'qwertyuiopasdfghjklzxcvbnm'.toUpperCase();
    const { handleGuess, disabled } = props;


    return (
        <div className={style.keyboard}>
            {keyboardSymbols.split('').map(symbol =>
                <KeyboardButton key={symbol} text={symbol} clickHandler={handleGuess} disabled={disabled}/>)}
        </div>
    );
}

