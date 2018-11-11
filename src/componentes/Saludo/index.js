import React, { Component } from "react";
import { Grid } from "react-bootstrap";
import { MensajeSaludo } from "./MensajeSaludo";
import { FormaSaludo } from "./FormaSaludo";

export class Saludo extends Component {
  state = {
    nombre: this.props.nombre
  };

  manejarNuevoSaludo = datos => {
    this.setState(datos);
  };

  render() {
    const { nombre, mensaje } = this.state;
    return (
      <Grid>
        <MensajeSaludo nombre={nombre} mensaje={mensaje} />
        <FormaSaludo alObtenerNuevoSaludo={this.manejarNuevoSaludo} />
      </Grid>
    );
  }
}

Saludo.defaultProps = {
  nombre: "Felipe",
  mensaje: "Mensaje default"
};

export default Saludo;
