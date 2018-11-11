import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Pelicula } from "./Pelicula/index";
import { PaginaNoExiste } from "./PaginaNoExiste";
import { Menu } from "./Menu";
import { Inicio } from "./Inicio";
import { Saludo } from "./Saludo/index";

export class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Menu />
          <Switch>
            <Route path="/" component={Inicio} exact />
            <Route path="/saludar" component={Saludo} />
            <Route path="/peliculas" component={Pelicula} />
            <Route component={PaginaNoExiste} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
