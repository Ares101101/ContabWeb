  import style from './AppC.module.css'
  import image from "../../assets/62shots_so.png";
  export default function Aplicaciones() {
    
    return (
      <article className={style.cont}>
         <img src={image}className={style.i} />
      </article>
    )
  }
  