 /* eslint-disable react/prop-types */

import style from './HangmanImg.module.css';
import { useEffect, useState } from 'react';



import ImgGallows from '/img/imggallows.png'
import ImgHead from '/img/1.png';
import ImgNeck from '/img/2.png';
import ImgHandLeft from '/img/3.png';
import ImgHandRight from '/img/4.png';
import ImgLegLeft from '/img/5.png';
import ImgLegRight from '/img/6.png';


export function HangmanImg ({ lives }) {

    const [hangman, setHangman] = useState(ImgGallows);
    
    useEffect(() => {
        const hangmanImages = [
            ImgGallows,
            ImgHead, 
            ImgNeck, 
            ImgHandLeft, 
            ImgHandRight, 
            ImgLegLeft, 
            ImgLegRight 
        ];
        const imageIndex = Math.max(0, Math.min(lives, hangmanImages.length - 1));
        setHangman(hangmanImages[imageIndex]);
    }, [lives]);

    return (
        <div className={style.hangman}>
            <img src={hangman} alt="Hangman" />
        </div>
    );
}
