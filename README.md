# Pokedex

Este projeto é um exercício de front-end feito para simular um consumidor-apresentador da API hospedada em https://pokeapi.co.

Esta aplicação responsiva de apresentação é feita em React, empregando o uso de TypeScript para o código e fluxo de dados com a biblioteca MobX. Ela está pronta para dockerização.

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

Todos os componentes desta aplicação são acompanhados de um arquivo de testes, que estará presente no mesmo diretório e será chamado _Componente.test.tsx_.

Componentes que tenham um grande volume de processamento de dados devem ter as funções que processam tais dados modularizadas e encapsuladas em pequenos exports testáveis. Por convenção, os componentes que fazem grandes processamentos contam com um arquivo para este propósito, chamado _processing.ts_, sempre em suas raízes.

**O Componente App reside em sua própria pasta dedicada, `/app`.** Este componente deve ser responsável apenas por instanciar o _roteador_, a _barra de navegação_ e as _rotas da aplicação_.

**As views residem em `/views`.**

**Rotas residem em `/routes`.** As definições das rotas devem ser feitas em funções exportadas de modo a permitir que o resto da aplicação as importe e se adapte uniformemente às constantes definitórias. Isso não inclui rotas usadas em testes ou de serviços externos, apenas as rotas internas da aplicação.

**Componentes de UI ficam em `/components`.** Se um componente é generalista o suficiente para pertencer a mais de uma página, ele pertence a `/components`. Componentes que dependam de componentes menores devem ter estes colocados dentro de sua própria estrutura, não em `/components`.

**Registros ficam em `/store`.** O fluxo de dados nesta aplicação consiste de estados globais estáticos isolados uns dos outros em arquivos Store, na pasta store. Os estados são compostos de classes com observáveis do MobX que qualquer componente pode acessar e modificar através dos getters e setters providos. A store **não** deve efetuar comunicações externas, somente segurar os dados advindos delas.

**Serviços ficam em `/services`.** Estes devem ser responsáveis por toda e qualquer comunicação externa, bem como a formatação destes para entrega uniforme a qualquer entidade que as precise na aplicação.

**Recursos compartilhados simples ficam em `/shared`.** Estes incluem constantes (exceto rotas), funções de apoio, etc.

## Sobre os testes

Na busca de 100% de cobertura dos testes, foram desconsiderados os seguintes:

### Efeitos dependentes da deslizagem da janela

E consequentemente o hook _useScrollPosition()_). Este compõe em íntegra o arquivo _`shared/hooks.ts`_.

### O arquivo index.tsx

O que está presente na raíz do projeto, advindo quase que inteiramente do CRA.

### Certas peculiaridades do Jest com ternários e cadeias

O Jest tende a encarar a presença de ternários e cadeias como linhas dúbias; enquanto que isto poderia ser facilmente remediado com algumas reordenações sintáticas -- e foi feito isto até um certo ponto -- existem críticas sobre esta "trapaça" (e.g. https://en.wikipedia.org/wiki/Modified_condition/decision_coverage). Assim, alguns outros contornos foram aplicados, enquanto que outras linhas permaneceram uma vez julgadas a decisão de código mais simples e limpa.
