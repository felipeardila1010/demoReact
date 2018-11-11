import React from "react";
import { Form, FormGroup, FormControl, Button } from "react-bootstrap";

const BuscarPelicula = props => {
  return (
    <Form inline onSubmit={props.peliculaPorBuscar}>
      <FormGroup>
        <FormControl
          type="text"
          placeholder="¿Que Pelicula buscas?"
          name="peliculaPorBuscar"
        />
      </FormGroup>
      <Button type="submit">Buscar</Button>
    </Form>
  );
};

export default BuscarPelicula;
