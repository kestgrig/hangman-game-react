/* eslint-disable react/prop-types */
import style from './HangmanImg.module.css';

import ImgGallows from '/img/imggallows.png'
import ImgHead from '/img/1.png';
import ImgNeck from '/img/2.png';
import ImgHandLeft from '/img/3.png';
import ImgHandRight from '/img/4.png';
import ImgLegLeft from '/img/5.png';
import ImgLegRight from '/img/6.png';


export function HangmanImg (props) {

    const{lives} = props;
    const hangman = [
        ImgGallows,  // tik kartuves
        ImgHead,     // galva
        ImgNeck,     // kaklas
        ImgHandLeft, // ranka
        ImgHandRight,// ranka
        ImgLegLeft,  // koja
        ImgLegRight  // koja
    ];

    const hangmanIndex = 6 - lives;

    return (
        <div className={style.hangman}>
            <img src={hangman[hangmanIndex]} alt='Hangman {hangmanIndex}' />
        </div>
    );
}
