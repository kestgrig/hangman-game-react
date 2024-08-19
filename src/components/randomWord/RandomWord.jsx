import { countries } from '../data/words.js';

export function getRandomWord() {
    const randomWord = countries[Math.floor(Math.random() * countries.length)];
    return (
        randomWord.text.toUpperCase()
    );
}
