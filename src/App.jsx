import { Header } from './components/header/Header';
import { Scoreboard } from './components/scoreboard/Scoreboard';
// import { Hangman } from './components/hangmanImg/HangmanImg';
import { GuessWords } from './components/guessWords/GuessWords';

import { countries } from "./data/words.js"

function App() {
  return (
    <>
      <Header />
      <Scoreboard />
      {/* <Hangman/> */}
      <GuessWords data={countries} />
    </>
    
  );
}

export default App
