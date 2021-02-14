import React from "react";
import Badge from 'react-simple-badges'
import { Jumbotron, Table, Container } from "react-bootstrap"
import Configuracao from "../Configuracoes/Configuracoes"
import Proposito from "../Proposito/Proposito"
import Funcionalidades from "../Funcionalidades/Funcionalidades"
import Charts from "../Charts/Charts"

function Badges() {

  return (
    <>
      <br></br>
      <article>
        <Container style={{ color: "orange" }}>
          
          <strong><h1><b>ACHEBARATO WEB-APLICATION</b></h1></strong>
        </Container>
      </article>
      <Proposito/>
      <hr/>
      <table>
       <strong><h1><b>TECNOLOGIAS</b></h1></strong> 

        <Badge name="C Sharp" style={{ width: 200, padding: 10 }} logoColor="#daeeeb" />
        <Badge name=".NET" style={{ width: 200, padding: 10 }} logoColor="#c53af0" />
        <Badge name="Docker" style={{ width: 200, padding: 10 }} logoColor="#bee7fa" />
        <Badge name="RabbitMQ" style={{ width: 200, padding: 10 }} logoColor="#d1df0d" />
        <Badge name="MongoDB" style={{ width: 200, padding: 10 }} logoColor="#6eee33" />
        <Badge name="GitHub" style={{ width: 200, padding: 10 }} logoColor="#e8d9ec" />
        <Badge name="Amazon AWS" style={{ width: 200, padding: 10 }} logoColor="#1a04e0" />
        <Badge name="Swagger" style={{ width: 200, padding: 10 }} logoColor="#ae0ddf" />
        <Badge name="JavaScript" style={{ width: 200, padding: 10 }} logoColor="#e7ec98" />
        <Badge name="React" style={{ width: 200, padding: 10 }} logoColor="#15a3e6" />
        <Badge name="Bootstrap" style={{ width: 200, padding: 10 }} logoColor="#d1df0d" />
        <Badge name="Linux" style={{ width: 200, padding: 10 }} logoColor="#f2f5cc" />

      </table>
      <br></br>
      <br></br>

      <Charts/>
      <Funcionalidades/>
      

    </>
  );
}

export default Badges;
