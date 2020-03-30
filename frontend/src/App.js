import React from 'react';

import './global.css';

import Routes from './routes';

// JSX (Javascript XML): é a integração do HTML dentro do Javascript
// Componente: no React.Js componente é uma função que retorna HTML
// Propriedade: semelhante aos atributos do HTML, propriedade são parametros das funções componentes
// Estado: é uma variável que armazena as informações das componentes
// Imutabilidade: por uma questão de performace, não se manipula os valores dos estados, a imutabilidade sobrepoem esses valores

function App() {

  return (
    <Routes />
  );
}

export default App;
