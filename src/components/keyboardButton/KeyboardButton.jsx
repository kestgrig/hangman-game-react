/* eslint-disable react/prop-types */

export function KeyboardButton(props) {
    const { text, clickHandler } = props;
    return (
        <button className="btn" onClick={() => clickHandler(text)}>{text}</button>
    );
}

