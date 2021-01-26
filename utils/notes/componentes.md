# PRIMEIRO COMPONENTE REACT

* Criar uma pasta em ```./src/``` chamada *components* para inserirmos nossos componentes;
* Após criar nosso componente no diretório indicado, podemos usá-lo importando nosso componente no arquivo *./src/index.js*;
* Para utilizar o componente, usamos o nome do import do componente como se fosse uma "tag" HTML;
* No arquivo do componente, precisamos exportar a função como *default* ```export default function()```;
* Quando usamos o *export default*, o nome da função do componente não necessariamente precisa ser o mesmo nome do import no *index.js*;

```javascript
import ReactDOM from 'react-dom' // Biblioteca React para manipulação da DOM
import React from 'react' // Biblioteca para usarmos código JSX
import './index.css' // Arquivo de estilo

import First from './components/basics/FirstComponent' // Importando o componente React

const element = document.getElementById('root')

ReactDOM.render(
    <div>
        <First></First> // Renderizando nosso componente
    </div>, element
)
```

# COMPONENTES COM JSX

* Para usarmos *JSX* em nossos componentes, precisamos importar o *React*;

```javascript
import React from 'react'

export default function firstComponent() {
    const message = "Welcome to ReactJS!"
    return (
        <div>
            <h2>Component With JSX</h2>
            <p>{ message }</p>
        </div>
    )
}
```

# COMPONENTES COM PROPRIEDADES

* Inicialmente, vamos usar componentes funcionais (*Baseados em funções*);
* Criar componentes com a extensão *.jsx*;
* Como os componentes são funcionais, podemos passar parâmetros para essas funções para que possamos personalizar nossos componentes. Ao criarmos nosso componente funcional, passamos nossos parâmetros para eles e podemos usá-los conforme a necessidade;
* Para acessarmos os parâmetros, devemos acessar pelo nome *props* e utilizando a notação ponto, acessar a propriedade desejada do parâmetro;

**Exemplo**

```javascript
import React from 'react'

// Componente.jsx
export default function Component1(props) {
    return (
        <div>
            <h2>{ props.title }</h2>
            <h3>{ props.subtitle }</h3>
    )
} 
```
```javascript
// Index.js
import Comp1 from './components/Component1'

ReactDOM.render(
    <div>
        <Comp1 title="React Components" subtitle="My Component with Parameters"/>
    </div>
)
```