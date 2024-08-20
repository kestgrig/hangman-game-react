/* eslint-disable react/prop-types */
import style from'./KeyboardButton.module.css';

export function KeyboardButton(props) {
    const { text, clickHandler, disabled, status } = props;
    function getButtonStyle () {
        if (status === 'correct') 
            return style.btnCorrect;
        if (status === 'incorrect') 
            return style.btnIncorrect;
        return 'btn';
    };

    return (
        <button className={getButtonStyle()} disabled={disabled} onClick={() => clickHandler(text)}>{text}</button>
    );
}

