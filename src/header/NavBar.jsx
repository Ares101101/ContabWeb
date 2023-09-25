import style from './NavBar.module.css';


export default function NavBar() {
  return (
    <div className={style.NavBarStyle}>
      <div className={style.ContabStyle} >
        Contab
      </div>
      <div className={style.inicioStyle}>
        Inicio
      </div>
      <div className={style.AppStyle}>
        Aplicaciones
      </div>
      <div className={style.CliStyle}>
        Clientes
      </div>
      <div className={style.CurStyle}>
        Cursos
      </div>
    </div>
  )
}
