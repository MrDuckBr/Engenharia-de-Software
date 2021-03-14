# ConstruBem
#### Descrição:
ContruBem é uma empresa que fornece serviços tercerizado através de um site

#### Tecnologias usadas
```sh
Linguagens: HTML5, CSS, JavaScript
Banco de dados: PostgreSQL
```

#### Regras e Padrões GIT
```sh
1-Os commits deverão possuir textos claros e auto explicativos, visando a compreensão do que foi versionado naquele momento, não ultrapassando 50 caracteres.
2- Campo de texto não obrigatório.
3- Branches:
    -Master: Usada para entregar o projeto final.
    -Dev: Usada durante o desenvolvimento do projeto, deve conter sempre a versão mais atualizada do projeto.
    -Release: Contém a versão estavel do projeto, feitas na forma de X.X.X
```

#### Padrões
```sh
	1 - Variáveis devem ser declaradas no estilo CamelCase
	2 - Deve ser feito teste de rotas no insomnia ou postman
	3 - Nomes de métodos e variáveis deve ser o mais explicito possível
	4 - Não devem ser enviadas mensagens de erro HTTP para o usuário
```
#### Boas Práticas
```sh
	1 - Realizar testes em todas as rotas criadas
	2 - Identação correta do código, utilizar 4 espaços, para 1 tab
	3 - Escrever código que seja auto explicativo.
	4 - Explicitar o máximo possível o que o método faz.
	5 - Mensagens de erro do backend devem ter tratamento, para que chegue uma mensagem padrão ao usuário
	6 - Os métodos devem ter apenas umas funcionalidade cada.
```
#### Derivação de pastas
```sh
.
├── Back-end
│   ├── package.json
│   ├── package-lock.json
│   ├── README.md
│   └── src
│       ├── app
│       │   ├── controllers
│       │   │   ├── Funcionario.js
│       │   │   ├── Funcionario.test.js
│       │   │   ├── index.js
│       │   │   ├── Produto.js
│       │   │   ├── Servico.js
│       │   │   ├── Servico.test.js
│       │   │   └── User.js
│       │   └── schemas
│       │       ├── Funcionario.js
│       │       ├── Produto.js
│       │       ├── Servico.js
│       │       └── User.js
│       ├── database
│       │   └── index.js
│       ├── index.js
│       ├── jest.config.js
│       └── server.js
├── Diagrama
│   ├── Diagrama_de_classe.pdf
│   ├── Diagrama_de_Implantação.png
│   └── Diagrama_de_sequencia.pdf
├── Front-end
│   ├── package.json
│   ├── package-lock.json
│   └── src
│       ├── Funcionarios
│       │   ├── atualizarFuncionario.html
│       │   ├── cadastroFuncionario.html
│       │   ├── dashBoardFuncionario.html
│       │   ├── estilos
│       │   │   ├── cadastroFuncionario.css
│       │   │   └── dashBoard.css
│       │   └── index.js
│       ├── Index
│       │   ├── cadastrarEmpresa.html
│       │   ├── cadastrarUsuario.html
│       │   ├── cadastro.js
│       │   ├── estilos
│       │   │   ├── cadastrarEmpresa.css
│       │   │   ├── cadastrarUsuario.css
│       │   │   ├── index.css
│       │   │   └── login.css
│       │   ├── index.html
│       │   ├── index.js
│       │   ├── login.html
│       │   ├── login.js
│       │   └── solicitarServico.html
│       ├── Produtos
│       │   ├── cadastroProduto.html
│       │   ├── estilos
│       │   │   └── cadastroProduto.css
│       │   └── produto.js
│       └── Servicos
│           ├── atualizar.html
│           ├── cadastros.html
│           ├── dashBoard.html
│           ├── estilos
│           │   ├── cadastros.css
│           │   └── dashBoard.css
│           └── servico.js
├── Padrões Adotados
│   └── Regra de Verificação  e Analise de Requisitos.pdf
├── README.md
├── Requisitos
│   ├── Documento_Requisitos_ConstruBem.docx
│   └── Documento_Requisitos_ConstruBem.pdf
└── Testes
    ├── AtualizarFuncionarioTest.java
    ├── AtualizarServicoTest.java
    ├── CadastrarFuncionarioTest.java
    ├── CadastrarServicoTest.java
    ├── DeletarFuncionarioTest.java
    ├── DeletarServicoTest.java
    ├── ListarFuncionarioTest.java
    ├── ListarServicoTest.java
    └── Testes_FrontEnd.side
```
