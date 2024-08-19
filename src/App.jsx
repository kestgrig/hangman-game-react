import { useState, useEffect } from 'react';

import { LivesLeft } from './components/livesLeft/LivesLeft';
import { Header } from './components/header/Header';
import { Scoreboard } from './components/scoreboard/Scoreboard';
import { Gallows } from './components/hangmanImg/Gallows';
import { GuessWords } from './components/guessWords/GuessWords';
import { Keyboard } from './components/keyboard/Keyboard';
import { RandomWord } from './components/randomWord/RandomWord';


function App() {
  const [ word, resetWord ] = useState(RandomWord());
  const [guessedLetters, setGuessedLetters] = useState([]); //naudoja iskart kaip random zodi
  const [lives, setLives] = useState(6);
  const [gameOver, setGameOver] = useState(false); 
  const [win, setWin] = useState(false);
  const [wins, setWins] = useState(() => parseInt(localStorage.getItem('wins')) || 0);
  const [losses, setLosses] = useState(() => parseInt(localStorage.getItem('losses')) || 0);

  useEffect(() => 
    {const handleKeydown = (e) => {
      if (!gameOver && /^[A-Z]$/.test(e.key)) {
        handleGuess(e.key.toUpperCase());
      }
    };

    window.addEventListener('keydown', handleKeydown);

    return () => window.removeEventListener('keydown', handleKeydown);
  }, [gameOver, guessedLetters]);
    
  const handleGuess = (letter) => {
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
  };

  const resetGame = () => {
    resetWord(RandomWord());
    setGuessedLetters([]);
    setLives(6);
    setGameOver(false);
    localStorage.removeItem('wins');
    localStorage.removeItem('losses')
  };

  const displayedWord = word
    ? word.split('').map((letter) => guessedLetters.includes(letter) ? letter : '_').join(' ')
    : ''

  return (
    <div className="game-container">
      <Header />
      <Scoreboard wins={wins} losses={losses} />
      <Gallows lives={lives} />
      <GuessWords word={displayedWord} guessedLetters={guessedLetters} />
      <LivesLeft lives={lives} />
      <Keyboard handleGuess={handleGuess} disabled={gameOver} />
      {gameOver && (
        <div className="game-over-message">
          <p>{win ? 'Congratulations! You won!' : 'Game Over! You lost!'}</p>
          <button onClick={resetGame}>Start a new game</button>
        </div>
      )}
    </div>
    
  );
}

export default App
