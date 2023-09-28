import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from "./header/NavBar";
import Clientes from "./pages/Clientes/Clientes";
import Inicio from "./pages/inicio/Inicio";
import Servicios from "./pages/servicios/Servicios";
import Aplicaciones from "./pages/aplicaciones/AppC"
import style from './App.module.css';
import { useState } from 'react';

function App() {
  const [isFondo, setIsFondo]=useState(true);
  return (
    
    <div className={style.fondo}>
      <Router>
        <NavBar/>
        <Routes>
          <Route exact path='/' element={ <Inicio/>}/>
          <Route path='/Clientes' element={ <Clientes/>}/>
          <Route path='/Aplicaciones' element={ <Aplicaciones/>}/>
          <Route path='/Servicios' element={ <Servicios/>}/>
        </Routes>
      </Router>
    </div>
    )
}

export default App
 