import {Logo,Menu} from '../Components/ExpoComponents'
import style from '../Style/Header.module.css'
export const Header = () => {
  return (
    <header className={style.Main}>
      <section className={style.Logo}>
        <Logo/>
      </section>

      <section className={style.Menu}>
        <Menu/>
      </section>

      <section className={style.Title}>
        <h1  className={style.ContTitle}>¡ THE RICK AND MORTYa !</h1>
      </section>

    </header>
    
    )
};
