import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Productos from './component/Productos';
import AgregarProductos from './component/AgregarProductos';
import EditarProductos from './component/EditarProductos';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/nuevo-producto" component={AgregarProductos} />
        <Route exact path="/productos" component={Productos} />
        <Route exact path="/productos/editar/:id" component={EditarProductos} />
      </Switch>
    </Router>
  );
}

export default App;
