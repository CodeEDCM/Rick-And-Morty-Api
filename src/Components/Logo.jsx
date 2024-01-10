import LogoImg from '../Assets/Img/logo2.ico'
import style from './style/Logo.module.css'

export const Logo = () => {
  return (
    <div className={style.Main}>
     <img  src={LogoImg} alt="Imagen Del Logo" className={style.ContImg}/>
     <span className={style.ContSpan}>Proyect Appi</span>
    </div>
  )
}
