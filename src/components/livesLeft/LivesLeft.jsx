 /* eslint-disable react/prop-types */
import style from '../livesLeft/LivesLeft.module.css'
export function LivesLeft(props) {
 const {lives} = props;
    return (
        <div className={style.lives}>
            <span>Lives left: {lives}</span>
        </div>
    )
}