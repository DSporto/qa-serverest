# Automação de testes - ServeRest

Projeto desenvolvido para automação de testes da aplicação ServeRest utilizando Cypress e Cucumber.

Foram implementados cenários de frontend e API, utilizando Page Object para organizar os testes de interface e uma camada de services para as requisições da API.

## Tecnologias

- JavaScript
- Cypress
- Cucumber
- Node.js

## Estrutura

```text
cypress/
├── e2e/
│   └── features/
│       ├── api/
│       │   ├── login.feature
│       │   └── usuarios.feature
│       └── frontend/
│           ├── cadastro.feature
│           └── login.feature
├── pages/
│   ├── cadastroPage.js
│   └── loginPage.js
├── services/
│   ├── loginService.js
│   └── usuariosService.js
└── support/
    └── step_definitions/
        ├── api/
        └── frontend/
```

## Cenários implementados

### Frontend

- Cadastro de usuário
- Login com sucesso
- Login com credenciais inválidas

### API

- Cadastro de usuário
- Consulta de usuário
- Login

## Instalação

Instale as dependências:

```bash
npm install
```

## Executando os testes

Para executar todos os testes:

```bash
npm test
```

Somente frontend:

```bash
npm run test:frontend
```

Somente API:

```bash
npm run test:api
```

Para abrir o Cypress:

```bash
npm run cy:open
```

## Aplicação testada

Frontend: ServeRest Front  
API: ServeRest API