/* eslint-disable react/prop-types */

import { HangmanImg } from '../hangmanImg/HangmanImg';

export function Gallows(props) {
  const { lives } = props;
  return (
    <div className="gallows">
      <HangmanImg lives={lives} />
    </div>
  );
}