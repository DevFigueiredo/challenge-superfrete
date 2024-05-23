<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Estrutura Node.js</a> para criar aplicativos do lado do servidor eficientes e escalonáveis.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>

## Description

Desafio vaga Node.js Senior da empresa SuperFrete.

## Instalação

```bash
$ yarn install
```

## Configuração das Variáveis de Ambiente

Para rodar a aplicação, você precisa configurar as variáveis de ambiente. Existem dois arquivos .env que você precisa configurar:

1. .env.local: Para rodar a aplicação no ambiente local.
2. .env: Para rodar a aplicação com o **emulador do Firebase**.

Crie um arquivo **.env.local** na raiz do projeto e adicione as seguintes variáveis:

```bash
# ENVIRONMENT = localhost / dev
ENVIRONMENT=localhost
# LOG_FORMAT = json / colorize
LOG_FORMAT=colorize
# FIREBASE EMULATOR HOST
FIRESTORE_EMULATOR_HOST="127.0.0.1:8080"
```

Crie um arquivo **.env** na raiz do projeto e adicione as seguintes variáveis:

```bash
# ENVIRONMENT = localhost / dev
ENVIRONMENT=dev
# LOG_FORMAT = json / colorize
LOG_FORMAT=json
# FIREBASE EMULATOR HOST
FIRESTORE_EMULATOR_HOST="127.0.0.1:8080"
```

## Iniciando o backend

````bash
# development
$ yarn run start <appName>


# firebase emulator
$ yarn run start:emulator


## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
````

## Swagger

A documentação da API está disponível via Swagger. O Swagger é uma poderosa ferramenta para visualizar e interagir com a API.

### Acessando a Documentação do Swagger

- Para acessar a documentação do Swagger, siga os passos abaixo:
- Certifique-se de que o backend está em execução. Você pode iniciar o backend com o comando:

```bash
# development
$ yarn run start <appName>

```

OU

```bash
# firebase emulator
$ yarn run start:emulator
```

### Abra seu navegador e vá para o seguinte endereço:

```bash
http://localhost:3000/docs
```

OU

### Abra seu navegador e vá para o seguinte endereço:

```bash
http://127.0.0.1:5001/desafio-super-frete/us-central1/challenge/docs
```

### Usando a Documentação do Swagger

1. **Exploração das Endpoints:** No Swagger UI, você pode explorar todas as endpoints disponíveis na API, ver detalhes sobre cada endpoint, os parâmetros necessários, e os tipos de resposta.
2. **Testes de Endpoints:** Você pode testar as endpoints diretamente do Swagger UI. Para isso, clique na endpoint que deseja testar, insira os parâmetros necessários e clique em "Execute".

---

## Estrutura de Pastas do Projeto

Este documento descreve a estrutura de pastas do projeto para facilitar a navegação e compreensão do código.

```plaintext
apps/
└── challenge/
    └── src/
        ├── controllers/
        │   ├── challenge.controller.spec.ts
        │   └── challenge.controller.ts
        ├── infra/
        │   └── repositories/
        │       ├── interfaces/
        │       ├── challenge-repository.spec.ts
        │       └── challenge-repository.ts
        ├── triggers/
        │   └── challenge.trigger.ts
        ├── use-cases/
        │   ├── challenge-use-case.dto.ts
        │   ├── challenge-use-case.schema.ts
        │   ├── challenge-use-case.spec.ts
        │   └── challenge-use-case.ts
        ├── challenge.module.ts
        ├── function.ts
        └── main.ts
shared/
├── @types/
│   ├── index.d.ts
├── config/
│   ├── configuration.spec.ts
│   └── configuration.ts
├── docs/
├── filters/
│   ├── all-exception.filter.spec.ts
│   └── all-exception.filter.ts
├── middlewares/
│   └── logger-middleware.ts
├── test/
│   ├── e2e/
│   │   └── challenge.controller.e2e-spec.ts
│   ├── mocks/
│   │   └── challenge-mock.ts
│   └── jest-e2e.json
└── utils/
    ├── create-server.ts
    ├── database.ts
    ├── function-export.ts
    ├── generate-uuid.ts
    ├── logger.spec.ts
    ├── logger.ts
    └── set-incremental-id.spec.ts
    └── set-incremental-id.ts

```

### Descrição das Pastas

- **apps/**
  Pasta raiz onde todos os aplicativos estão localizados.

- **apps/challenge/**
  Diretório do aplicativo específico denominado "challenge".

- **apps/challenge/src/**
  Pasta principal contendo todo o código-fonte do aplicativo.

- **apps/challenge/src/controllers/**
  Contém os controladores da aplicação, responsáveis por lidar com as requisições e respostas HTTP.

- **apps/challenge/src/infra/**
  Contém a infraestrutura da aplicação, incluindo repositórios e interfaces.

- **apps/challenge/src/infra/repositories/**
  Contém os repositórios que interagem com a base de dados.

- **apps/challenge/src/infra/repositories/interfaces/**
  Contém interfaces que definem contratos para os repositórios.

- **apps/challenge/src/triggers/**
  Contém os gatilhos/eventos que iniciam certas operações na aplicação.

- **apps/challenge/src/use-cases/**
  Contém os casos de uso da aplicação, representando a lógica de negócios.

- **shared/**
  Diretório para recursos compartilhados entre diferentes partes do aplicativo.

- **shared/@types/**
  Contém definições de tipos TypeScript que podem ser usados por todo o projeto.

- **shared/config/**
  Contém arquivos de configuração do projeto, como variaveis de ambiente.

- **shared/docs/**
  Contém documentação geral do projeto. Como swaggger, readmes, explicações do projeto.s

- **shared/filters/**
  Contém filtros globais para tratamento de exceções.

- **shared/middlewares/**
  Contém middlewares reutilizáveis no projeto.

- **shared/test/**
  Contém arquivos e pastas relacionados a testes.

- **shared/test/e2e/**
  Contém testes de ponta a ponta (end-to-end).

- **shared/test/mocks/**
  Contém mocks que são reutilizados para usarem nos testes.

- **shared/utils/**
  Contém utilitários e funções auxiliares.

---

## Repositorio originado por Desafio Tecnico da SuperFrete

- [x] Faça uma arquitetura que possa ser utilizada para escalar o projeto para centenas de funções;

- [x] Deverá utilizar o firebase como servidor e dentro do firebase utilizar dois recursos, que são: functions e firestore;
- [x] Criar uma função no firebase functions que cria um novo registro em uma collection do firestore;
- [x] Ao adicionar esse registro, deve-se usar o trigger do firestore (onCreate) para setar o atributo increment_id no registro criado;
- [x] Cada registro tem que utilizar o próximo increment_id disponível. Ex: se o último for 3, deverá utilizar o 4, ou se o último for 10, deve-se utilizar o 11;
- [x] A chamada para a function deve ser um POST com o body em json com o atributo name;
- [x] Faça a arquitetura do código utilizando o princípio de design que preferir. E deve conter testes automatizados;
- [x] Pode rodar todo o projeto do firebase via emulador, a documentação do próprio firebase tem toda a explicação.
- [x] Por último, adicione uma mini documentação do código criado no README explicando o design de arquitetura utilizado e como instalar as libs e rodar o código em questão.
- [x] Ao finalizar, envie-nos por e-mail também o link do github do projeto para que possamos analisar o código.
