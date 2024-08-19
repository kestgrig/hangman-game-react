/* eslint-disable react/prop-types */

export function KeyboardButton(props) {
    const { text, clickHandler, disabled } = props;
    return (
        <button className="btn" disabled={disabled} onClick={() => clickHandler(text)}>{text}</button>
    );
}

