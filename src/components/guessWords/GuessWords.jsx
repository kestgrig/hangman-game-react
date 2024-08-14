import style from "./GuessWords.module.css";

export function GuessWords(params) {
    const word = 'lithuania'
    return (
        <div className={style.lettercontainer}>
            {word.split("").map((letter, index) => 
                <span key={index}>
                {params.data.includes(letter)}
                </span> 
            )}
        </div>
    );
}