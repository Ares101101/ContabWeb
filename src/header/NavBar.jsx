import React, { useEffect } from 'react';
import style from './NavBar.module.css';
import { Link, useLocation } from 'react-router-dom';


export default function NavBar({setIsFondo}) {
  const location = useLocation();
  useEffect(() => {
    const cambiarFondo = () => {
      if (location.pathname === '/') {
        setIsFondo({
          fondo1: true,
          fondo2: false,
          fondo3: false,
          fondo4: false,
        });
      }
            
      if (location.pathname === '/Aplicaciones') {
        setIsFondo({
          fondo1: false,
          fondo2: true,
          fondo3: false,
          fondo4: false,
        });
      }
    };

    cambiarFondo();
  }, [location, setIsFondo]);
  return (
    <nav className={style.NavBarStyle}>
      <div className={style.diStyle}>
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
              <div className={style.divStyle}>
                <ul className={style.uls1}>
                    <li className={style.inicioStylet}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" focusable="false" className="chakra-icon css-1fmr1qf">
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
     
                    </li> 
                    <Link to='/' className={style.inicioStyle}>
                    Inicio 
                    </Link>
                    <Link to='/Aplicaciones' className={style.inicioStyle}>
                      Aplicaciones 
                    </Link>  
                </ul>
              </div>  
          </ul>    
      </div>
    </nav>
  )
}
