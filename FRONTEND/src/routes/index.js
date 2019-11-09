import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Residencia from '../pages/Residencia';
import Comodo from '../pages/Comodo';
import Atuador from '../pages/Atuador';
import Sensor from '../pages/Sensor';
import Casa from '../pages/Casa';
import Profile from '../pages/Profile';
import ListagemResidencia from '../pages/ListagemResidencia';
import ComodoList from '~/pages/ComodoList';
import Componentes from '../pages/Componentes';
import SensorEditar from '../pages/SensorEditar'
import ResidenciaEditar from '../pages/ResidenciaEditar'

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/profile" component={Profile} />
      <Route path="/residencia/list" component={ListagemResidencia} />
      <Route path="/residencia/edit/:id" component={ResidenciaEditar} />
      <Route path="/residencia" component={Residencia} />
      <Route path="/comodo/:id/sensor" component={Sensor} />
      <Route path="/comodo/:id/atuador" component={Atuador} />
      <Route path="/sensor/edit/:id" component={SensorEditar} />
      <Route path="/comodo/list/:id" component={ComodoList} />
      <Route path="/componentes/comodo/:id" component={Componentes} />
      <Route path="/comodo" component={Comodo} />
      <Route path="/casa" component={Casa} />
      <Route path="/register" component={SignUp} />
    </Switch>
  );
}
