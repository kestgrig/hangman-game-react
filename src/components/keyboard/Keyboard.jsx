import style from './Keyboard.module.css';

import { KeyboardButton } from '../keyboardButton/KeyboardButton';

export function Keyboard () {
    const keyboardSymbols = 'qwertyuiopasdfghjklzxcvbnm'.toUpperCase();

    return (
        <div className={style.keyboard}>
            {keyboardSymbols.split('').map(symbol =>
                <KeyboardButton key={symbol} text={symbol} clickHandler={()=>{}} />)}
        </div>
    );
}

