import style from './NavBar.module.css';
import { Link } from 'react-router-dom';


export default function NavBar() {
  return (
    <nav className={style.NavBarStyle}>
      <div className={style.divStyle}>
        <ul className={style.uls}>   
              <li >
                <strong className={style.ContabStyle} >
                  <span className={style.spC}>
                    Con
                  </span>
                  <span>
                    tab
                  </span>
                  </strong>
              </li>
              <li className={style.inicioStyle}>
                <Link to='/'>
                Inicio 
                </Link>
              </li>
              <li className={style.inicioStyle}>
                <Link to='/Aplicaciones'>
                  Aplicaciones 
                </Link>
              </li>
              <li className={style.inicioStyle}>
                <Link to='/Clientes'>
                  Clientes 
                </Link>
              </li>
              <li className={style.inicioStyle}>
                <Link to='/Servicios'>
                  Servicios
                </Link>
              </li>   
          </ul>    
      </div>
    </nav>
  )
}
