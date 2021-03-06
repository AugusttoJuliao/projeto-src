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
import ComodoList from '../pages/ComodoList';


export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/criarconta" exact component={SignUp} />      
      <Route path="/profile" component={Profile} />
      <Route path="/residencia/list" component={ListagemResidencia} />
      <Route path="/residencia" component={Residencia} />
      <Route path="/comodo/list/:id" component={ComodoList} />
      <Route path="/comodo" component={Comodo} />
      <Route path="/atuador" component={Atuador} />
      <Route path="/sensor" component={Sensor} />
      <Route path="/casa" component={Casa} />
    </Switch>
  );
}
