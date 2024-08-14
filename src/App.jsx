import { Header } from './components/header/Header';
import { Scoreboard } from './components/scoreboard/Scoreboard';
// import { Hangman } from './components/hangmanImg/HangmanImg';
import { GuessWords } from './components/guessWords/GuessWords';

function App() {
  return (
    <>
      <Header />
      <Scoreboard />
      {/* <Hangman/> */}
      <GuessWords />
    </>
    
  );
}

export default App
