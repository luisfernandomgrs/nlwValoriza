import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import { router } from "./routes";

import "./database";

const myPortAccess = 8080;
const app = express();

app.use(express.json());
app.use(router);
/**
 * Middleware para tratamento de erros, exigem 04 parâmetros;
 * Outros modelos de middleware, podem pedir apenas 03 parâmetros.
 * 
 * Este novo middleware, é importante inserir após as rotas, definidas em: app.use(router);
 */
app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    /**
     * Por padrão o Express não consegue tratar requisições Async...
     * Onde é necessário a instalação de uma biblioteca para isso; Ex: express-async-errors
     */
    if (err instanceof Error) {
      response.status(400).json({
        error: err.message
      });
    };

    console.log(err);
    return response.status(500).end();
  }
);

app.listen(myPortAccess, () => console.log(`Server is running | at ${myPortAccess}`))