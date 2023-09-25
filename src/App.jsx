import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from "./header/NavBar";
import Clientes from "./pages/Clientes/Clientes";
import EstudioContable from "./pages/estudio-contable/EstudioContable";
import Inicio from "./pages/inicio/Inicio";
import Servicios from "./pages/servicios/Servicios";

function App() {

  return (
    <div >
      <Router>
        <NavBar/>
        <Routes>
          <Route exact path='/' element={ <Inicio/>} />
          <Route path='/Clientes' element={ <Clientes/>}/>
          <Route path='/Estudio-Contable' element={ <EstudioContable/>}/>
          <Route path='/Servicios' element={ <Servicios/>}/>
        </Routes>
      </Router>
    </div>
    )
}

export default App
 