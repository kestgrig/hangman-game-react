import { useState, useEffect } from 'react';


import { Header } from './components/header/Header';
import { Scoreboard } from './components/scoreboard/Scoreboard';
import { HangmanImg } from './components/hangmanImg/HangmanImg';
import { GuessWords } from './components/guessWords/GuessWords';
import { Keyboard } from './components/keyboard/Keyboard';
import { getRandomWord } from "./components/randomWord/RandomWord";
import { ButtonRestart } from "./"

function App() {
    const [word, setWord] = useState('');
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [lives, setLives] = useState(6);

useEffect(() => {
    setWord(getRandomWord());
  }, []);

  const handleLetterClick = (letter) => {
    const upperCaseLetter = letter.toUpperCase();
    if (guessedLetters.includes(upperCaseLetter) || lives <= 0) return;

    setGuessedLetters((prev) => [...prev, upperCaseLetter]);

    if (!word.includes(upperCaseLetter)) {
      setLives((prev) => prev - 1);
    }
  };

  const handleRestart = () => {
    setWord(getRandomWord());
    setGuessedLetters([]);
    setLives(6);
  };

  const gameWon = word.split('').every((letter) => guessedLetters.includes(letter));
  const gameLost = lives <= 0;

  return (
    <>
      <Header />
      <Scoreboard />
      <HangmanImg lives={lives} />
      {/* <LivesLeft lives={lives} /> */}
      <GuessWords word={word} guessedLetters={guessedLetters} />

      <Keyboard word={word} guessedLetters={guessedLetters} onLetterClick={handleLetterClick} />
      {(gameLost || gameWon) && <ButtonRestart onRestart={handleRestart} />}
    </>
    
  );
}

export default App
