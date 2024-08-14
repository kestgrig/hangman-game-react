import style from "./GuessWords.module.css";
import { WordSellector } from './guessWords/GuessWords'

export function GuessWords(params) {
    return (
        <div className={style.word}>
            {WordSellector.split('').map((letter, index) =>
                <span className={style.letter} key={index}>
                    {params.data.includes(letter)
                        ? letter
                        : ''
                    }
                </span>
            )}

        </div>
    );
}

