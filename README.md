# Pokedex

Este projeto é um exercício de front-end feito para simular um consumidor-apresentador da API hospedada em https://pokeapi.co.

Esta aplicação de apresentação é feita em React, empregando o uso de TypeScript para o código e fluxo de dados com a biblioteca MobX.

## Configuração de ambiente

```json
{
  "node": "^12.12.0",
  "yarn": "^1.19.1"
}
```

## Rotinas de uso local

### Para desenvolvimento rápido

```
git fetch
git checkout development
yarn
yarn start
```

Na raíz do projeto, pode-se executar:

### `yarn start`

Para rodar a aplicação em modo de desenvolvimento.<br />
Abra [http://localhost:3001](http://localhost:3001) para vê-la no navegador.

### `yarn test`

Para iniciar a cabine de testes da aplicação, Jest.<br />

### `yarn build`

Para consolidar uma versão de produção da aplicação.<br />

## Estrutura de Arquivos

**O Componente App reside em sua própria pasta dedicada, `/app`.** Este componente deve ser responsável apenas por instanciar **Páginas** e engatilhar os processos iniciais para o carregamento saudável da aplicação, se houverem quaisquer, e instanciar qual componente página for melhor apropriado para o estado maior da aplicação.

**As páginas residem em `/pages`.** Suas funções devem ser sempre instanciar componentes que, para um subconjunto de rotas quaisquer que compartilhem do mesmo estado maior da aplicação (por exemplo, Autenticação) ou que instanciem os mesmos **componentes de UI** estáticos (por exemplo, a Navbar), estejam sempre presentes. Além destes componentes estáticos, encarrega-se de instanciar também as ditas **rotas**. Se aplicável, um componente página deve estar envelopado pelo BrowserRouter do react-router-dom para permitir que todos os componentes-filhos possam herdar e usar history e location para somente aquela seção da aplicação.

**Rotas residem em `/routes`.** Devem ser nada mais que a estrutura verbose do react router, com exceção do BrowserRouter, que já se faz presente nos componentes página. A divisão dos arquivos de rotas deve ir ao encontro da divisão dos componentes página.

**Componentes de UI ficam em `/components`.** Se um componente é generalista o suficiente para pertencer a mais de uma página, ele pertence a `/components`. Componentes que dependam de componentes menores devem ter estes colocados dentro de sua própria estrutura.

**Registros ficam em `/store`**. O fluxo de dados nesta aplicação consiste de estados globais estáticos isolados uns dos outros em arquivos Store, na pasta store. Os estados são compostos de classes com observáveis do MobX que qualquer componente pode acessar e modificar.
