import "reflect-metadata";
import express from "express";
import { router } from "./routes";

import "./database";

const myPortAccess = 8080;
const app = express();

app.use(express.json());
app.use(router);

app.listen(myPortAccess, () => console.log(`Server is running | at ${myPortAccess}`))