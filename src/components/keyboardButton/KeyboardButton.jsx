/* eslint-disable react/prop-types */

export function KeyboardButton(props) {
    const { text, clickHandler, disabled, status } = props;
    function getButtonStyle () {
        if (status === 'correct') 
            return 'btnCorrect';
        if (status === 'incorrect') 
            return 'btnIncorrect';
        return 'btn';
    };

    return (
        <button className={getButtonStyle()} disabled={disabled} onClick={() => clickHandler(text)}>{text}</button>
    );
}

