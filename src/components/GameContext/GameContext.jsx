// src/context/GameContext.jsx
import React, { createContext, useState } from 'react';

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [correctGuesses, setCorrectGuesses] = useState([]);
  const [usedLetters, setUsedLetters] = useState([]);
  const [word, setWord] = useState("");
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const [gamesPlayed, setGamesPlayed] = useState(0);

  return (
    <GameContext.Provider value={{
      wrongGuesses, setWrongGuesses,
      correctGuesses, setCorrectGuesses,
      usedLetters, setUsedLetters,
      word, setWord,
      wins, setWins,
      losses, setLosses,
      gamesPlayed, setGamesPlayed,
    }}>
      {children}
    </GameContext.Provider>
  );
};
