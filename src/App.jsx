import React from "react";
import { Router } from "./routing";

//utilizar esse mockup como exemplo

const db = [
  { "id": 1, "title": "Exercicios", "description": "Ir para academia fazer exercicios", "completed": true },
  { "id": 2, "title": "Limpar o carro", "description": "Limpar o carro inteiro, de dentro pra fora", "completed": false },
  { "id": 3, "title": "Banho e tosa", "description": "Levar o cachorro ao pet shop", "completed": false },
  { "id": 4, "title": "Limpar quarto", "description": "Limpar toda bagunça que está dentro do quarto", "completed": true },
  { "id": 5, "title": "trabalhar", "description": "Chegar ao escritorio antes das 20:00", "completed": true },
  { "id": 6, "title": "Ir ao banco", "description": "Chear ao banco antes das 10:00", "completed": false },
  { "id": 7, "title": "Almoçar", "description": "Preparar a comida para a janta", "completed": false },
  { "id": 8, "title": "Jogar volei", "description": "Ir a quadra para jogar volei com os amigos", "completed": true },
  { "id": 9, "title": "Estudar programação", "description": "Entrar na plataforma dos alunos para estudar", "completed": false },
  { "id": 10, "title": "shopping", "description": "Fazer algumas compras no shopping", "completed": true }
]

function App() {
  return (
    <div className="App" >
      <Router />
    </div>
  );
}

export default App;
