import { Router, Request, Response } from "express";
import TipoParametro from '../controllers/tipo_parametro';
import { authorization } from "../autenticacao";
import { apiKey } from "../middlewares";

const routes = Router();
// routes.post('/', TipoParametro.create);
// routes.get('/get', TipoParametro.getById);
// routes.get('/', TipoParametro.getAll);
// routes.put('/', TipoParametro.update);
// routes.delete('/:id', TipoParametro.delete);

// SOMENTE O ADMIN ACESSA CREATE E O DELETE
routes.post('/', authorization, apiKey, TipoParametro.create);
routes.get('/:id', apiKey, TipoParametro.getById);
routes.get('/', apiKey,  TipoParametro.getAll);
routes.put('/', apiKey, authorization, TipoParametro.update);
routes.delete('/:id', apiKey, authorization,  TipoParametro.delete);


routes.use((_: Request, res: Response) => res.json({ error: "Requisição desconhecida" }));
export default routes;