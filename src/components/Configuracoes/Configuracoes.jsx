import React from "react";
import Badge from 'react-simple-badges'
import { Jumbotron, Table, Container } from "react-bootstrap"




function Configuracao() {

  return (
    <>
      <Jumbotron style={{ backgroundColor: "#282c34" }}>
        <h1><b>DESAFIOS E SOLUÇÔES NA CONSTRUÇÂO DA APLICAÇÂO</b></h1>
        <Table striped bordered hover style={{ color: "white" }}>
          <thead>
            <tr>
              <th>QUERYS COMPLEXAS </th>
              <th>PERFORMANCES</th>
              <th>DEPLOY PARA AWS</th>
              <th>APLICAÇÂO MONOLÌTICA</th>
            </tr>
          </thead>
        </Table>
      </Jumbotron>


    </>
  );
}

export default Configuracao;
