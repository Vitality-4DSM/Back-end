import { Router, Request, Response } from "express";
import station from '../controllers/estacao';
import { authorization } from "../autenticacao";
import { apiKey } from "../middlewares";

const routes = Router();
// routes.post('/', station.create);
// routes.get('/get', station.getById);
// routes.get('/', station.getAll);
// routes.put('/', station.update);
// routes.delete('/:id', station.delete);

// SOMENTE O ADMIN ACESSA CREATE E O DELETE
routes.post('/', authorization,apiKey, station.create);
routes.get('/:id',apiKey, station.getById);
routes.get('/', apiKey, station.getAll);
routes.put('/', authorization, apiKey, station.update);
routes.delete('/:id', authorization, apiKey, station.delete);


routes.use((_: Request, res: Response) => res.json({ error: "Requisição desconhecida" }));
export default routes;