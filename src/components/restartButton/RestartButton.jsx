 /* eslint-disable react/prop-types */

export function ButtonRestart(props) {
  const { onRestart } = props;
  
    return (
    <button onClick={onRestart}>Start New Game</button>
  );
}