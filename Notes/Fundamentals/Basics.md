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

```