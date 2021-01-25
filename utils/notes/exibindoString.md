# EXIBINDO STRING EM TELA

* Para interagirmos com a estrutura da página, vamos precisar utilizar o *REACT DOM*;
  * *React Dom*: Biblioteca responsável por atualizar a DOM e exibir os elementos React;
  * *DOM*: Estrutura de árvore de elementos de uma página web. Fornece a estrutura de paǵinas que conhecemos hoje em dia;
* O React é uma SPA. Ou seja, ela possui somente uma página principal *~index.html~* e é essa página que irá ser renderizada pelo client-side;
* No arquivo *./public/index.html*, temo a tag ```<div id="root"/>```. Essa tag ser resposabilizará por receber os nossos componentes e renderizar na tela;
* O *react-dom* possui uma função chamada *render*. O render é responsável por renderizar código na nossa SPA. Ele possui dois parâmetros:
    1. Código que queremos renderizar;
    2. Local no *index.html* que queremos inserir o código;


**Exemplo**

```javascript
import ReactDOM from 'react-dom'

// Elemento onde vamos inserir o nosso código
const element = document.getElementById('root')

// Função Render -> Param 1    Param 2
ReactDOM.render('Hello React', element)
```


# CONHECENDO O JSX

* É uma forma de criar elementos para serem utilizadas como templates de aplicações React. Sua sintaxe é muito parecida com HTML. Essa sintaxe é convertida pelo transpilador e cria elementos dinamicamente, transformando o código para JS;
* Para usarmos a sintaxe JSX, precisamos importar o React;
* A sintaxe JSX permite que possamos usar a sintaxe HTML em contexto JS e com isso, dar mais facilidade para criarmos nosso código React;
* Podemos interpolar variáveis em código JSX usando *{ }*;

```javascript
import ReactDOM from 'react-dom'
import React from 'react'

const element = document.getElementById('root')
const text = <strong>Hello World!</strong>
// Sintaxe JSX -> Fez com que o texto fosse envolvido em uma tag <div>
ReactDOM.render(
    <div>
        Hello React!
    </div>, element
)

// Interpolando variáveis
ReactDOM.render(
    <div>
        { text }
    </div>, element
)
```


# CARREGANDO CSS

* Padronizar o nome dos arquivos de estilo para o mesmo nome do arquivo de código (.js, .jsx);
* Para usarmos arquivos de estilo, precisamos importar o arquivo *.css* no nosso arquivo de entrada da aplicação *index.js*;


# PRIMEIRO COMPONENTE REACT

* Criar uma pasta em ```./src/``` chamada *components* para inserirmos nossos componentes;

