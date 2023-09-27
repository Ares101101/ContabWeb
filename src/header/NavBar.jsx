import style from './NavBar.module.css';
import { Link } from 'react-router-dom';


export default function NavBar() {
  return (
    <div className={style.NavBarStyle}>
      <div className={style.ContabStyle}>
        Contab 
      </div>
      <div className={style.inicioStyle}>
        <Link to='/'>
         Inicio 
        </Link>
      </div>
      <div className={style.AppStyle}>
        <Link to='/Aplicaciones'>
          Aplicaciones 
        </Link>
      </div>
      <div className={style.CliStyle}>
        <Link to='/Clientes'>
          Clientes 
        </Link>
      </div>
      <div className={style.CurStyle}>
        <Link to='/Servicios'>
          Servicios
        </Link>
      </div>
    </div>
  )
}
