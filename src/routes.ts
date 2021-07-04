import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { ListUserSendComplimentsController } from "./controllers/ListUserSendComplimentsController";
import { ListUserReceiveComplimentsController } from "./controllers/ListUserReceiveComplimentsController";
import { ListTagsController } from "./controllers/ListTagsController";
import { ListUsersController } from "./controllers/ListUsersController";

const router = Router();

const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const listUserSendComplimentsController = new ListUserSendComplimentsController();
const listUserReceiveComplimentsController = new ListUserReceiveComplimentsController();
const listTagsController = new ListTagsController();
const listUsersController = new ListUsersController();

//router.get("/users", (request, response) => { return response.send("Olá") });
router.post("/tags", ensureAuthenticated, ensureAdmin, createTagController.handle);
router.get("/tags", ensureAuthenticated, listTagsController.handle);
router.post("/users", createUserController.handle);
router.get("/users", ensureAuthenticated, listUsersController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/compliments", ensureAuthenticated, createComplimentController.handle);
router.get("/users/compliments/send", ensureAuthenticated, listUserSendComplimentsController.handle);
router.get("/users/compliments/receive", ensureAuthenticated, listUserReceiveComplimentsController.handle);

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