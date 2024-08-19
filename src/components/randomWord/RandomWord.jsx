/*Importuoja duomenis (countries) is words.js failo.
Atsitiktinai pasirenka zodi is saraso.
Gražina ta zodi didziosiomis raidemis
*/

import { countries } from '../data/words.js';

export function RandomWord() {
    const randomWord = countries[Math.floor(Math.random() * countries.length)];
    return (
        randomWord.text.toUpperCase()
    );
}
