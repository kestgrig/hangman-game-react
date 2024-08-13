import style from './Scoreboard.module.css'

export function Scoreboard () {




    return (
        <>
            <div className={style.mainScoreboard}>
                <p>Played: {}</p>
                <p>Win: {}</p> 
                <p>Lose: {}</p>        
            </div>
        </>
    )
}