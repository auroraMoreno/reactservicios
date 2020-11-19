import logo from './../../logo.svg';
import './App.css';
import Customers from './../Customers';
import BuscarCustomer from './../BuscarCustomer';
import BuscadorCoches from './../BuscadorCoches';
//import Departamentos from './../../components/EmpleadosDepartamentos/Departamentos';
import Router from './../Router';
import EmpleadosRouter from './../RutasEmpleados/EmpleadosRouter';
import Departamentos from './../Crud/Departamentos';
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import MenuDepartamentos from './../Crud/MenuDepartamentos';

function App() {
  return (
    <div className="App">
     {/*<Customers/>
      <BuscadorCoches/>
         <BuscarCustomer/>
             <Departamentos/>
             <EmpleadosRouter/>
                 <Router/>
     */}
    <Router/>

    </div>
  );
}

export default App;
