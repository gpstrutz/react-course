# Conceitos Básicos

* O *ReactJS* é um framework **SPA**, ou seja, ela tem somente uma página onde será injetada toda a aplicação.


# Aula #1 - Exibindo Strings na Tela

* Para exibir algo na tela, precisamos interagir com a DOM através da biblioteca _ReactDOM_:
    ```javascript
    import reactDOM from 'react-dom'
    ```
    * **.render**: Método utilizado para renderizar algo na tela. Possui dois parâmetros:
      * 1. O que será renderizado;
      * 2. Onde será renderizado.

    * Como o *React* é uma **SPA**, toda a nossa aplicação será injetada na ```<div id=root/>``` do projeto.



## Sintaxe JSX

* Extensão React para Javascript. Usado para escrever componentes UI com conceitos separados, os **Componentes**;
* Para usar a sintaxe *JSX*, precisamos importar o React:

```javascript
import { React } from 'react';
import ReactDOM from 'react-dom'

const element = document.getElementById('root')

ReactDOM.render(
    <div>Hello ReactJS!</div>,
    element
);
```
* Podemos interpolar variáveis com ReactJS:

```javascript
import { React } from 'react';
import ReactDOM from 'react-dom'

const element = document.getElementById('root')
const myTag = <strong>Hello Giovanni</strong>

ReactDOM.render(
    <div>
      Hello ReactJS!
      { myTag }
    </div>,
    element
);

```


## Carregando CSS

* Por padrão, criamos um arquivo **.css** com o mesmo nome do arquivo **.js**;


## Primeiro Componente ReactJS

* Criar uma pasta chamada **Components** para armazenar os componentes ReactJS;
* Para utilizar os componentes, precisamos exportá-lo;
* Os componentes serão utilizados no arquivo **index.js** do nosso projeto. Para usar o componente, referenciamos ele como uma *tag html*:

```javascript

/* Index.js */

import { React } from "react";
import ReactDOM from "react-dom";

// Componente ReactJS
import First from './components/fundamentals/BasicComponent';

import './index.css'

const element = document.getElementById("root");

ReactDOM.render(
  <div>
    <First></First> 
  </div>,
  element
);


/* Component.js */

export default First() {
  return 'Hello ReactJS'
}

```
* É comum utilizarmos *expressões* quando queremos adicionar tags ao retorno do nosso componente:

```javascript
import React from "react"

export default function First() {
    return (
        <div>
            <h2>First Component with JSX</h2>
        </div>
    )
}

```

## Componentes com Propriedades

* Por padrão, componentes React são funções Javascript. Com isso, podemos passar parâmetros para nossos componentes para renderizar eles na nossa aplicação;
* Os parâmetros dos componentes são chamados de **props**. Eles são parâmetros de objeto que recebe as propriedades dos nossos componentes:

```javascript

/* Component.js */

export default Welcome(props) {
  return (
    <h1>Hello, { props.name }</h1>
  )
}

/* Index.js */

const element = document.getElementById("root");

ReactDOM.render(
  <div>
    <Welcome name="Giovanni" />
  </div>,
  element
);

```
* A propriedade do nosso componente será passada como argumento no momento em que o componente for instanciado;
* Para passar valores numéricos para *props*, devemos usar **{ }**;
* As *props* são somente **read Only**, ou seja, não podem ser alteradas pelo componente;



## React Fragment

* No *ReactJS*, não podemos renderizar multiplos elementos no mesmo nível;
* Usamos os *Fragments* quando quisermos renderizar componentes adjacentes e que não estejam envolvidos por uma ```<div>``` ou algum outro elemento;
* Usado para melhor performance do HTML e para evitar ```<div>```s desnecessárias;
* Para resolver esse problema, devemos usar o **React Fragments**:

```javascript
import React from "react";

export default function Fragments( props ) {
    return (
        <React.Fragment>
            <h2>React Fragments</h2>
            <p>Using React Fragments</p>
        </React.Fragment>
    )
}

// Or...

import React from "react";

export default function Fragments( props ) {
    return (
        <>
          <h2>React Fragments</h2>
          <p>Using React Fragments</p>
        </>
    )
}
```