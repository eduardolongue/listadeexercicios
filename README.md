
## Componentes

### App.js

O componente principal que gerencia a aplicação. Ele mantém o estado dos filmes da lista e lida com as funções de adicionar, editar e excluir filmes. Este componente contém a lógica principal da aplicação e gerencia a interação entre os componentes filhos.

### ItensForms.js

Componente responsável por adicionar novos filmes à lista. Ele contém um formulário com um campo de entrada de texto e um botão de submissão. Quando o formulário é enviado, o novo filme é adicionado à lista. Este componente é essencial para a funcionalidade de inserção de novos dados na aplicação.

### ItensLista.js

Componente responsável por exibir e editar filmes da lista. Ele recebe os filmes, o índice do filme sendo editado, o texto atual do filme sendo editado e funções para editar e salvar filmes. Este componente permite a visualização e modificação dos filmes na lista, proporcionando uma interface para edição inline dos itens.

## Estilos

Os estilos CSS estão definidos no arquivo `ListaEditavel.css` e incluem:

- `.container`: Estiliza o container principal da aplicação.
- `ul`: Remove o estilo padrão da lista.
- `li`: Estiliza cada item da lista.
- `input[type="text"]`: Estiliza os campos de entrada de texto.
- `button`: Estiliza os botões e define seus estados de hover e disabled.
- `.add-item-container`: Estiliza o container do formulário de adição de itens.
- `.actions`: Estiliza o container dos botões de ação para excluir itens.

## Funcionalidades

- Adicionar novos filmes através de um formulário.
- Exibir a lista de filmes adicionados.
- Editar filmes da lista.
- Excluir o último filme da lista.
- Excluir todos os filmes da lista.

## Como Rodar o Projeto

Comandos utilizadas

1. Crie o projeto React:
   ```sh
   npx create-react-app 
   lista-ex-escola
   cd lista-ex-escola/
   code .

## Link do Surge

https://imminent-wheel.surge.sh/