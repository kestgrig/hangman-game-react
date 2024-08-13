import style from './HangmanImg.module.css'

import Imggallows from '/img/imggallows.png'
// import ImgHead from '/img/1.png';
// import ImgNeck from '/img/2.png';
// import ImgHandLeft from '/img/3.png';
// import ImgHandRight from '/img/4.png';
// import ImgLegLeft from '/img/5.png';
// import ImgLegRight from '/img/6.png';


export function Hangman () {


    return (
        <>
            <img className={style.gallowsmain} src={Imggallows} alt="imggallows" />
        </>
    );
}