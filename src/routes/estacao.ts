import { Router, Request, Response } from "express";
import station from '../controllers/estacao';
import { authorization, authAdmin } from "../autenticacao";

const routes = Router();
routes.post('/', station.create);
routes.get('/get', station.getById);
routes.get('/', station.getAll);
routes.put('/', station.update);
routes.delete('/', station.delete);

// SOMENTE O ADMIN ACESSA CREATE E O DELETE
// routes.post('/', authorization, authAdmin ,station.create);
// routes.get('/get', authorization, station.getById);
// routes.get('/', authorization , station.getAll);
// routes.put('/', authorization, station.update);
// routes.delete('/', authorization, authAdmin , station.delete);


routes.use((_: Request, res: Response) => res.json({ error: "Requisição desconhecida" }));
export default routes;