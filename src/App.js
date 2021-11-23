import React from 'react';
import LeerTagComponent from './components/LeerTag';
import RegistrarTagComponent from './components/RegistrarTag';
import CheckTagComponent from './components/CheckTag';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter, Switch, Router, Link, NavLink } from 'react-router-dom';
import IngresosComponent from './components/Ingresos';

export default function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <h1>Navbar ...</h1>
        <div className='btn-group'>
          <NavLink to='/leer-tag' className='btn btn-primary' activeClassName='active'>Leer Tag</NavLink>
          <Link to='/registrar-tag' className='btn btn-primary' activeClassName='active'>Registrar Tag</Link>
          <Link to='/check-tag' className='btn btn-primary' activeClassName='active'>Verificar acceso</Link>
          <Link to='/ingresos' className='btn btn-primary' activeClassName='active'>Ver ingresos</Link>
        </div>
        <Switch>
          <Route exact path='/'>
            <p>Bienvenidos al control RFID</p>
          </Route>
          <Route exact path='/leer-tag' component={LeerTagComponent} />
          <Route exact path='/registrar-tag' component={RegistrarTagComponent} />
          <Route exact path='/check-tag' component={CheckTagComponent} />
          <Route exact path='/ingresos' component={IngresosComponent} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}