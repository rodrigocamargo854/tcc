import React from "react";
import Badge from 'react-simple-badges'
import { Jumbotron, Table, Container } from "react-bootstrap"
import { Tittle, Ul } from './styles'

var functionalitiesArray = [
  'Filtração de melhores preços por produto;',
  'Notificação via e-mail ou WhatsApp quando o produto desejável se encontra no preço esperado;',
  'Recomendações de produtos com base nas recentes pesquisas do usuário;',
  'Exibição da lista de produtos favoritados pelo usuário;',
  'Histórico de preços do produto.'
]


function Funcionalidades() {
  return (
    <>
      <Jumbotron style={{ backgroundColor: "#282c34" }}>
        <Tittle>FUNCIONALIDADES</Tittle>
        <Ul>{functionalitiesArray}</Ul>
        <img src="./logoicone.png" alt=""/>
      </Jumbotron>
    </>
  );
}

export default Funcionalidades;
