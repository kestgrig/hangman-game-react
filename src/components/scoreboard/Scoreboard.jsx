 /* eslint-disable react/prop-types */

import style from './Scoreboard.module.css'

export function Scoreboard (props) {
    const { wins, losses } = props;

    return (
        <div className={style.mainScoreboard}>
            <p>Games Played: {wins + losses}</p>
            <p>Wins: {wins}</p>
            <p>Losses: {losses}</p>      
         </div>
    );
}