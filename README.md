Este projeto foi criado com:

- Next.js
- Typescript
- React Hook Form
- Styled Components
- Jest/React Testing Library
- Tooling de testes para Redux
- Polished
- Redux

## Iniciando o Projeto

Para iniciar o projeto, deve-se rodar o seguinte comando:

```bash
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) para ter acesso à pagina de login.

Após efetuar o login, você terá acesso ao board do kanban.

Dentro dele, você encontrará um board com 3 colunas vazias, podendo-se criar um novo card no botão "Novo", que se encontra no header.

## Suite de testes

Para rodar a suite de testes, tem-se dois comandos:

```bash
yarn test
# ou
yarn test:watch (para rodar em modo watch)
```

## O que não foi feito

Não foi inserido as libs e funcionalidades da DOMPurify e Marked por falta de tempo disponibilizado para a criação dos testes unitários e demais funcionalidades do desafio.
