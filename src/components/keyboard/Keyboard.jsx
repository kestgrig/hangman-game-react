/* eslint-disable react/prop-types */
import style from './Keyboard.module.css';

import { KeyboardButton } from '../keyboardButton/KeyboardButton';

export function Keyboard (props) {
    const keyboardSymbols = 'qwertyuiopasdfghjklzxcvbnm'.toUpperCase();
    const { handleGuess, guessedLetters, word, disabled } = props;

    function getLetterStatus (letter) {
        if (!guessedLetters.includes(letter)) {
            return ''; // tuscia eilute jei raide nespeta
        }
        return word.includes(letter) ? 'correct' : 'incorrect' //ar raide yra zodyje
    };
    
    return (
        <div className={style.keyboard}>
            {keyboardSymbols.split('').map(symbol =>
                <KeyboardButton 
                    key={symbol} 
                    text={symbol} 
                    clickHandler={handleGuess} 
                    status={getLetterStatus(symbol)} 
                    disabled={disabled || guessedLetters.includes(symbol)}
                />
            )}
        </div>
    );
}


