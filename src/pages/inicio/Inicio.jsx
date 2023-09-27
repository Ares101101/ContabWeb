  import style from './Inicio.module.css'
  import image from "../../assets/1366_2000.jpg";

  export default function Inicio() {
    return (
      <div>
         <div className={style.inicioS} >
          <ul>
            <p className={style.p1}>Contab: Innovación Contable con Software Libre</p>
            <p className={style.p}>
            Contab es una empresa líder en el sector de la programación, dedicada a optimizar los procesos contables para MYPES y PYMES. Nos especializamos en el desarrollo y la implementación de soluciones innovadoras, creando software libre para potenciar la eficiencia y la calidad de las aplicaciones contables.
            </p>
            <button className={style.button}> aplicaciones
            </button>
            <button className={style.button}> Vision
            </button>
          </ul>
          <img src={image}className={style.i} />
        </div> 
        <div className={style.inicioS} >
          <ul>
            
            <p className={style.p2} >
            Valores Fundamentales:
            </p>
            <p className={style.p3}>
            1. Innovación Abierta: "Abrazamos la innovación abierta mediante el desarrollo y la promoción de software libre. Esto no solo permite a las empresas acceder a herramientas avanzadas durante la fase de prueba, sino que también fomenta la colaboración y el intercambio de conocimientos en la comunidad empresarial."

            2. Accesibilidad: "Nos esforzamos por hacer que las soluciones de contabilidad sean accesibles para todas las empresas, incluso durante la fase de prueba. Nuestro compromiso con el software libre garantiza que las empresas puedan beneficiarse de nuestras herramientas sin costo inicial."

            3. Colaboración Sostenible: "Creemos en la colaboración sostenible. La fase de prueba y el modelo de pago futuro nos permitirán continuar ofreciendo soluciones de alta calidad mientras mantenemos un compromiso a largo plazo con la comunidad empresarial."
            </p>   <p className={style.p2} >
              VISION
            </p>
            <p className={style.p3}>
            En Contab, creemos en el poder de la programación para transformar la contabilidad de las empresas. Nos comprometemos a proporcionar soluciones de vanguardia, y parte de este compromiso implica la fase de prueba de algunas de nuestras aplicaciones. Estamos emocionados de ofrecer a las empresas la oportunidad de probar y experimentar con nuestras herramientas de manera gratuita durante esta etapa inicial
            </p>   <p className={style.p2} >
            Fase de Prueba:
            </p>
            <p className={style.p3}>
            "Actualmente, algunas de nuestras aplicaciones se encuentran en fase de prueba, lo que significa que están disponibles de manera gratuita para que las empresas las exploren y experimenten. Esta fase nos permite recopilar valiosos comentarios y perfeccionar nuestras soluciones para satisfacer las necesidades específicas de nuestros usuarios."
            </p>   
            <p className={style.p2} >
            Modelo de Pago Futuro:
            </p>
            <p className={style.p3}>
            "En el futuro, una vez que hayamos perfeccionado nuestras aplicaciones y recibido comentarios valiosos de la comunidad empresarial, implementaremos un modelo de pago justo y transparente. Este modelo nos permitirá continuar ofreciendo soluciones de alta calidad y seguir invirtiendo en la mejora constante de nuestras herramientas."
            </p>   
          </ul>
        </div>
      </div>
    
    )
  }
