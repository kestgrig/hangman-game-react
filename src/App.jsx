import { useState } from 'react';


import { Header } from './components/header/Header';
import { Scoreboard } from './components/scoreboard/Scoreboard';
import { HangmanImg } from './components/hangmanImg/HangmanImg';
// import { GuessWords } from './components/guessWords/GuessWords';
import { Keyboard } from './components/keyboard/Keyboard';
// import { countries } from "./data/words.js"

function App() {
  const [lives, setLives] = useState(6);

  return (
    <>
      <Header />
      <Scoreboard />
      <HangmanImg lives={lives}/>
      {/* <GuessWords data={countries} /> */}
      
      <Keyboard />
    </>
    
  );
}

export default App
