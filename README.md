# nlwValoriza

Project to studing Node.JS with #Rocketseat #nlwTogether

# Commands

## inicializa nosso projeto

```cmd
yarn init -y
```

## adiciona o TypeScript como dependêcnia em tempo de desenvolvimento/projeto

```cmd
yarn add typescript -D
```

## adiciona o Express Framework web

```cmd
yarn add express
```

## instala as tipagens para uso do auto-complete das bibliotecas do Express Framework web

default base command line: yarn add @types/

```cmd
yarn add @types/express -D
```

## initialize configurations from typescript to the project

```cmd
yarn tsc --init
```

## Enable and Disable, properties into tsconfig.json

```ts
"strict": false
```

# compiling project before to the execution/test application

```cmd
yarn tsc
```

## execution of the specify file into project application

```cmd
yarn index.js
```

## execution of the project application

```cmd
node src/server.js
```

# instalando dependência para facilitar o fluxo de compilar e executar a aplicação durante o desenvolvimento

Sua responsabilidade será compilar/converter o código typescript para o node sem precisarmos usar "yarn tsc" e "yarn <file.js>" sempre que desejarmos realizar nossos testes de desenvolvimento.

```cmd
yarn add ts-node-dev -D
```

Para que tudo funcione, adicione o seguinte bloco em "package.json"

```ts
"scripts" : {
    "dev": "ts-node-dev scr/server.ts"
  },
```
