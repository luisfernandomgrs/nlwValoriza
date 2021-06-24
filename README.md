# nlwValoriza

Project to studing Node.JS with #Rocketseat #nlwTogether

## Regras

- Cadastro de usuário

[ x ] Não é permitido cadastrar mais de um usuário com o mesmo e-mail

[ x ] Não é permitido cadastrar usuário sem e-mail

- Cadastro de TAG

[ x ] Não é permito cadastrar mais de uma Tag com o mesmo nome

[ x ] Não é permitido cadastrar Tag sem nome

[ x ] somente Administradores podem cadastrar uma Tag

Cadastro de Elogios

[ ] Não é permitido um usuário cadastrar um elogio para si

[ ] Não é permitido cadastrar elogios para usuários inválidos

[ ] O usuário precisa estar autenticado na aplicação

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

## instalando dependência para facilitar o fluxo de compilar e executar a aplicação durante o desenvolvimento

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

## Instalando o TypeORM

```cmd
yarn add typeorm reflect-metadata sqlite3
```

# Tipos de Parâmetros

- Routes Params => Presentes na url/rota
- Query Params => Semelhantes aos routes params, precedidos de um "?", obrigatóriamente seguem o padrão chave=valor, e são separados por um "&"
- Body Params => Usados em um Post, Out e Patch; Estão presentes no corpo da request em forma de um objeto JSON ou semelhante.

# Notes

## Methods/Routes, to use in this project

- GET => Buscar de informação
- POST => Inserir (Criar) uma informação dentro da API
- PUT => Alterar uma informação dentro da API
- DELETE => Remover um dado...
- PATCH => Alterar uma informação especifica... Somente o avatar ou a senha...

## Migrations:

### Criando...

```cmd
yarn typeorm migration :create -n CreateUsers
```

### Execute migration

```cmd
yarn typeorm migration:run
```

### Create Entity using typeorm Entity

```cmd
yarn typeorm entity:create -n User
```

# Config into tsconfig.json

```json
"strict": false,                        /_ Enable all strict type-checking options. _/
"strictPropertyInitialization": false,  /_ Enable strict checking of property initialization in classes. _/
"experimentalDecorators": true,         /_ Enables experimental support for ES7 decorators. _/
"emitDecoratorMetadata": true,          /_ Enables experimental support for emitting type metadata for decorators. _/
```

# Class #02

Instalando biblioteca UUID

```cmd
yarn add uuid
yarn add @types/uuid -D
```

Notes:
- Qual a funcionalidade das MIGRATIONS?
  - Definir modelos das entidades na aplicação

# Class #03
- O que são middlewares: São camadas que estão entre a nossa request e nossa response; Ou seja, são camadas capazes de "traduzir" e/ou intermediar uma request/response.
- Exemplo de um middleware:
```ts
const app = express();

app.use(express.json());
app.use(router);
```

# Diagram

## Controller -> Service (throw new exception)
- O Controller é a camada acima da Service, ou seja; Service será requisitada pelo Controller. É o controller que deverá tratar as exceptions lançadas pelo service.

## Server -> Routes -> Controller -> Service (throw new exception)
- Neste caso, a camada superior é o Server... O Controller é a camada acima da Service;
- Neste novo modelo o Server será o responsável por tratar as exceptions lançadas pelo service, evitando que o programador esqueça de fazer um tratamento usando o try catch em algum local do código.


```ts
   /**
   * Modelo de tratamento de erros
   */
    try {
      const { name, email, admin } = request.body;
      const createUserService = new CreateUserService();
      const user = await createUserService.execute({ name, email, admin });

      return response.json(user);
    }
    catch (_error) {
      return response.status(404).json({ error: _error.message });
    }
```

# Ordem Clean Code (No MVC)
## Migration (create, run) -> Entities -> Repositories -> Services -> Controller
- 1. Migration (create, run)
- 2. Entities
- 3. Repositories
- 4. Services
- 5. Controller

## Bibliotecas necessárias

- Instala o Express-Async-Errors, e efetuar um import...
```cmd
yarn add express-async-errors
```
```ts
import "express-async-errors";
```

## Criando migrations Tags
```cmd
yarn typeorm migration:create -n CreateTags
```

## Notes
- Normalmente a criação de recursos, é nomeada no plural; Ex: "/users"
```ts
router.post("/users", createUserController.handle);
router.post("/tags", createTagController.handle);
```

# Class #04

Instalando a biblioteca JWT (Jason Web Token - jwt.io)

```cmd
yarn add jsonwebtoken
yarn add @types/jsonwebtoken - D
yarn typeorm migration:create -n AlterUserAddPassword
yarn add bcryptjs
yarn add @types/bcryptjs -D
```

continue...

```cmd
yarn typeorm migration:create -n CreateCompliments
```