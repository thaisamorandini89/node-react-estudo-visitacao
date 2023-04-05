import express from "express";
import clients from "./src/controllers/clients.js";

const routes = express.Router();

routes.get("/clients", clients.findAll);
routes.post("/clients", clients.addClient);

export { routes as default };
