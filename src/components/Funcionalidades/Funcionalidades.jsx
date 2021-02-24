import React from "react";
import Badge from 'react-simple-badges'
import { Jumbotron, Table, Container } from "react-bootstrap"
import { Tittle, P} from './styles'

function Funcionalidades() {
  return (
    <>
      <Jumbotron style={{ backgroundColor: "#282c34" }}>
        <Tittle>
          <strong>FUNCIONALIDADES</strong>
          
          </Tittle>
        <br/>
        <P>Notificações via e-mail ou sms quando o produto desejável se encontrar no preço esperado;</P>
        <P>Recomendações de produtos com base nas recentes pesquisas do usuário;</P>
        <P>Filtro dos melhores preços por produto;</P>
        <P>Histórico de preços do produto.</P>
        <br/>
      </Jumbotron>
    </>
  );
}

export default Funcionalidades;
