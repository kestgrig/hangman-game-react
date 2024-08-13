import style from './Header.module.css';
import Gallows from '/img/gallows.png'
import Logo from '/img/hangmanlogo.png'


export function Header() {
    return (
        <header className={style.mainHeader}>
            <div className={style.mainGallows}>
                <img className={style.gallowslogo} src={Gallows} alt="img" />
                <img className={style.logo} src={Logo} alt="Logo" />
            </div>
        </header>
    );
}