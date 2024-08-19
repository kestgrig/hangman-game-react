 /* eslint-disable react/prop-types */

import style from "./GuessWords.module.css";

export function GuessWords(props) {
    const {word, guessedLetters} = props;


    return (
        <div className={style.word}>
                <span className={style.letter}> 
                    {word.split('').map(letter => 
                        guessedLetters.includes(letter) 
                            ? letter 
                            : '_')
                        .join(' ')
                    };
                </span>
        </div>
    );
}

