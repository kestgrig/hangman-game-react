 /* eslint-disable react/prop-types */

import style from "./GuessWords.module.css";

export function GuessWords(props) {
    const {word, guessedLetters} = props;

    const displayedWord = word.split('').map((letter) =>
        guessedLetters.includes(letter) ? letter : '_'
    ).join(' ');

       return (
        <div className={style.wordDisplay}>
            {displayedWord}
        </div>
    );
}

