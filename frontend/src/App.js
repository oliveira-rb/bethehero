import React, { useState } from 'react';

import './global.css'

import Routes from './routes';

 // Componente é uma função que retorna código html
 // JSX (Javascript XML) - HTML Integrado dentro do Javascript

function App() {
 // let counter = useState(0);
 // Use state retorna array com [valor, funcaoDeAtualizacao]

  return (
    <Routes />

  );
}

export default App;
