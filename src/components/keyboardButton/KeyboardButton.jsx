export function KeyboardButton({ button, onClick }) {
    return <button className="key" onClick={() => onClick(button)}>{button}</button>;
}