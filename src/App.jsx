import { useState, useEffect, useCallback } from 'react';
import styles from './App.module.css';

import { LivesLeft } from './components/livesLeft/LivesLeft';
import { Header } from './components/header/Header';
import { Scoreboard } from './components/scoreboard/Scoreboard';
import { Gallows } from './components/hangmanImg/Gallows';
import { GuessWords } from './components/guessWords/GuessWords';
import { Keyboard } from './components/keyboard/Keyboard';
import { RandomWord } from './components/randomWord/RandomWord';


function App() {
  const [word, resetWord] = useState(RandomWord());
  const [guessedLetters, setGuessedLetters] = useState([]); //naudoja iskart kaip random zodi
  const [lives, setLives] = useState(6);
  const [gameOver, setGameOver] = useState(false); 
  const [win, setWin] = useState(false);
  const [wins, setWins] = useState(() => parseInt(localStorage.getItem('wins')) || 0);
  const [losses, setLosses] = useState(() => parseInt(localStorage.getItem('losses')) || 0);

  const handleGuess = useCallback((letter) => {
    setGuessedLetters((prevGuessedLetters) => {
      if (gameOver || prevGuessedLetters.includes(letter)) 
        return prevGuessedLetters;

      const newGuessedLetters = [...prevGuessedLetters, letter];
      if (!word.includes(letter)) {
        setLives((prevLives) => {
          const newLives = prevLives - 1;
          if (newLives <= 0) {
            setGameOver(true);
            setLosses((prevLosses) => {
              const updatedLosses = prevLosses + 1;
              localStorage.setItem('losses', updatedLosses);
              return updatedLosses;
            });
          }
          return newLives;
        });
      }

      const hasGuessedAllLetters = !word.split('').some((letter) => !newGuessedLetters.includes(letter));
      if (hasGuessedAllLetters) {
        setGameOver(true);
        setWin(true);
        setWins((prevWins) => {
          const updatedWins = prevWins + 1;
          localStorage.setItem('wins', updatedWins);
          return updatedWins;
        });
      }

      return newGuessedLetters;
    });
  }, [gameOver, word]);

  useEffect(() => 
    {const handleKeydown = (e) => {
      if (!gameOver && /^[a-zsdA-Z]$/.test(e.key)) {
        handleGuess(e.key.toUpperCase());
      }
    };

    window.addEventListener('keydown', handleKeydown);

    return () => window.removeEventListener('keydown', handleKeydown);
  }, [gameOver, guessedLetters, handleGuess]);
    
  useEffect(() => {
    // isvalau localStorage ir nustatau pradine reiksme
    localStorage.removeItem('wins');
    localStorage.removeItem('losses');
    setWins(0);
    setLosses(0);
  }, []);

  function resetGame () {
    resetWord(RandomWord());
    setGuessedLetters([]);
    setLives(6);
    setGameOver(false);
    setWin(false);
  };

  const displayedWord = word.split('').map((letter) => 
    guessedLetters.includes(letter) ? letter : '_'
  ).join(' ');


  return (
    <div className={styles.gameContainer}>
      <Header />
      <div className={styles.centeredContent}>
        <Scoreboard wins={wins} losses={losses} />
        <Gallows lives={lives} />
        <GuessWords word={displayedWord} guessedLetters={guessedLetters} />
        <LivesLeft lives={lives} />
        <Keyboard handleGuess={handleGuess} guessedLetters={guessedLetters} word={word} disabled={gameOver} />
        {gameOver && (
          <div className={styles.gameMessage}>
            <p>{win ? 'Congratulations! You won!' : 'Game Over! You lost!'}</p>
            <button className={styles.newGameButton} onClick={resetGame}>Start a new game</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App
