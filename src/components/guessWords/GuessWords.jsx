 /* eslint-disable react/prop-types */

import style from "./GuessWords.module.css";

export function GuessWords(props) {
    const {word, guessedLetters} = props;

    return (
        <div className={style.word}>
            {word.split('').map((letter, index) =>
                <span className={style.letter} key={index}>
                    {guessedLetters.includes(letter)
                        ? letter
                        : '_'
                    }
                </span>
            )}

        </div>
    );
}

