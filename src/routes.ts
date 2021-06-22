import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";

const router = Router();

const createUserController = new CreateUserController();

//router.get("/users", (request, response) => { return response.send("Olá") });
router.post("/users", createUserController.handle);

export { router };