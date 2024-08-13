import style from './Keyboard.module.css';

export function Keyboard () {
    const keyboardSymbols = 'qwertyuiopasdfghjklzxcvbnm';

    return (
    keyboardSymbols.split('').toUpperCase().map(symbol => 
        <Keyboardbutton key={symbol} button={symbol} />)
    ),
};
