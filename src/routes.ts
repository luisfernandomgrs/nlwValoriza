import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();

//router.get("/users", (request, response) => { return response.send("Olá") });
router.post("/users", createUserController.handle);
router.post("/tags", ensureAdmin, createTagController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/compliments", createComplimentController.handle);

export { router };

/**
 * IMPORTANT
 *
 * A ORDEM EM QUE OS MIDDLEWARES SAO INSERIDOS DETERMINAM A O USO OBRIGATÓRIO DO MIDDLEWARE ANTERIOR.
 * O MODELO ADOTADO EM: ->
 *  "router.post("/tags", ensureAdmin, createTagController.handle);"
 * -> DEFINE QUE "ensureAdmin" SERÁ USADO APENAS NESTA ROTA.
 *
 * ESTA ORDEM:
 *    router.post("/users", createUserController.handle);
 *    router.post("/tags", ensureAdmin, createTagController.handle);
 * DEFINE QUE:
 *     router.post("/tags", ensureAdmin, createTagController.handle);
 * SÓ SERÁ EXECUTADA APÓS:
 *    router.post("/users", createUserController.handle);
 * OU SEJA:
 *    UMA VALIDAÇÃO DO LOGIN SERÁ OBRIGATÓRIA.
 * CONCLUSÃO:
 *    O MIDDLEWARE "ensureAdmin" FARÁ A VALIDAÇÃO SE É UM ADMINISTRADOR APENAS PARA A ROTA "/tags".
 */