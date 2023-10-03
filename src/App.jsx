import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import NavBar from "./header/NavBar";
import Inicio from "./pages/inicio/Inicio";
import Aplicaciones from "./pages/aplicaciones/AppC"
import style from './App.module.css';
import { useEffect, useState } from 'react';

function App() {

  const [isFondo, setIsFondo]=useState({
    fondo1: true,
    fondo2: false,
    fondo3: false,
    fondo4: false,
  });
  const verificarEstado = () => {
    for (const key in isFondo) {
      if (isFondo.hasOwnProperty(key)) {
        if (isFondo[key] === true) {
          return style[key] ;
        }
      }
    }
  };
  
  
  return (
    
    <div className={verificarEstado()}>
      <Router>
        <NavBar  setIsFondo={setIsFondo}/>
        <Routes>
          <Route exact path='/' element={ <Inicio />}/>
          <Route path='/Aplicaciones' element={ <Aplicaciones/>}/>
        
        </Routes>
      </Router>
    </div>
    )
}

export default App
 