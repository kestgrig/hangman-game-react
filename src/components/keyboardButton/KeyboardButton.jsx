import PropTypes from 'prop-types';

export function KeyboardButton(props) {
    const { text, clickHandler } = props;
    return (
        <button className="btn" onClick={() => clickHandler(text)}>{text}</button>
    );
}

KeyboardButton.propTypes = {
    text: PropTypes.string.isRequired,
    clickHandler: PropTypes.func.isRequired,
};