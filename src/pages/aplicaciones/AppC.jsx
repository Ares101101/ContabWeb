  import style from './AppC.module.css'
  import image from "../../assets/62shots_so.png";
  import image1 from "../../assets/602shots_so.png";
  import image3 from "../../assets/325shots_so.png";
  export default function Aplicaciones() {
    
    return (
      <article className={style.article}> 
        <header className={style.headerc} >
          <div className={style.divco1}>
            <div className={style.divco}>
              <strong className={style.p1}>Contab: Innovación Contable con Software Libre</strong>
              <p className={style.p}>
              Contab es una empresa líder en el sector de la programación, dedicada a optimizar los procesos contables para MYPES y PYMES. Nos especializamos en el desarrollo y la implementación de soluciones innovadoras, creando software libre para potenciar la eficiencia y la calidad de las aplicaciones contables.
              </p>
              <aside>
              <button className={style.button}> 
                aplicaciones
              </button>
              <button className={style.button}> 
                Vision
              </button>
              </aside>
            </div>
            <img src={image} className={style.i1} />
          </div>
        </header>
        <header className={style.headerc} >
          <div className={style.divco2}>
            <img src={image1} className={style.i1} />
            <div className={style.divco}>
              <strong className={style.p1}>Contab: Innovación Contable con Software Libre</strong>
              <p className={style.p}>
              Contab es una empresa líder en el sector de la programación, dedicada a optimizar los procesos contables para MYPES y PYMES. Nos especializamos en el desarrollo y la implementación de soluciones innovadoras, creando software libre para potenciar la eficiencia y la calidad de las aplicaciones contables.
              </p>
              <aside>
              <button className={style.button}> 
                aplicaciones
              </button>
              <button className={style.button}> 
                Vision
              </button>
              </aside>
            </div>
          </div>
        </header>
        <header className={style.headerc} >
          <div className={style.divco1}>
            <div className={style.divco}>
              <strong className={style.p1}>Contab: Innovación Contable con Software Libre</strong>
              <p className={style.p}>
              Contab es una empresa líder en el sector de la programación, dedicada a optimizar los procesos contables para MYPES y PYMES. Nos especializamos en el desarrollo y la implementación de soluciones innovadoras, creando software libre para potenciar la eficiencia y la calidad de las aplicaciones contables.
              </p>
              <aside>
              <button className={style.button}> 
                aplicaciones
              </button>
              <button className={style.button}> 
                Vision
              </button>
              </aside>
            </div>
            <img src={image3} className={style.i1} />
          </div>    
        </header>   
      </article>
    )
  }
  