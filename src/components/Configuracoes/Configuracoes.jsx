import React from "react";
import Badge from "react-simple-badges";
import { Jumbotron, Table, Container } from "react-bootstrap";

function Configuracao() {
  return (
    <>
      <Jumbotron style={{ backgroundColor: "#282c34" }}>
        <h1>
          <b>DESAFIOS E SOLUÇÔES NA CONSTRUÇÃO DA APLICAÇÃO</b>
        </h1>
        <ol>
          <li>
            <strong>Construção do motor de busca</strong>
            <ul>
              <li>Pesquisa de produtos não perfomática</li>
              <li>Query complexas para filtros de pesquisa na base de dados</li>
            </ul>
            <strong>Solução</strong>
            <ul>
              <li>Adoção de banco de dados NoSQl</li>
              <li>Filtros mais consisos para buscas</li>
            </ul>
          </li>
          <br/>
          <li>
            <strong>Performace da API</strong>
            <ul>
              <li>Response com tamanho muito grande</li>
              <li>Response com propriedades nulas</li>
              <li>Consultas desnecessárias à banco de dados</li>
            </ul>
            <strong>Solução</strong>
            <ul>
              <li>Criando responses com informação necessárias à requisição</li>
              <li>
                Removendo valores nulos configurando no middleware da ASP.NET
                core
              </li>
              <li>Compressão do response</li>
            </ul>
          </li>
          <br/>
          <li>
            <strong>Aplicação monolítica</strong>
            <ul>
              <li>Dificil manutenibilidade do código</li>
              <li>Aplicação complexa</li>
            </ul>
            <strong>Solução</strong>
            <ul>
              <li>Migração para arquitetura baseada em microserviços</li>
              <li>Utilização do RabbitMQ para comunicação</li>
            </ul>
          </li>
          <li><strong>Construção do Front-End utilizando React</strong></li>
        </ol>
      </Jumbotron>
    </>
  );
}

export default Configuracao;
