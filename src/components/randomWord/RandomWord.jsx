import { words } from '../data/words.js';

export function getRandomWord() {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    return (
        randomWord.text.toUpperCase()
    );
}
