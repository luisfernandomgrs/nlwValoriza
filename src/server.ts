import express from "express";

const myPortAccess = 8080;
const app = express();

/**
 * Methods, to use in this project
 * GET    => Buscar de informação
 * POST   => Inserir (Criar) uma informação dentro da API
 * PUT    => Alterar uma informação dentro da API
 * DELETE => Remover um dado...
 * PATCH  => Alterar uma informação especifica... Somente o avatar ou a senha...
 */

app.get("/home", (request, response) => {
  // request:   Tudo que está entrando
  // response:  Tudo que está saindo
  return response.send("Hello #NLW Together :)");
});

app.post("/post", (request, response) => {
  return response.send("Route POST success access");
});
// initialize port access, to: http://localhost:3000
app.listen(myPortAccess, () => console.log(`Server is running | at ${myPortAccess}`))