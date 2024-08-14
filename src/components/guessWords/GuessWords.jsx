import style from "./GuessWords.module.css";

export function GuessWords({selectedWord, correctLetters}) {
    return (
        <div className={style.word}>
            {selectedWord.split('').map((letter, index) => {
                return (
                    <span className={style.letter} key={index}>
                    {correctLetters.includes(letter)
                        ? letter
                        : ''
                    }
                    </span>
                ) 
            })}
        </div>
    );
}

