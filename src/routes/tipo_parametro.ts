import { Router, Request, Response } from "express";
import TipoParametro from '../controllers/tipo_parametro';
import { authorization } from "../autenticacao";

const routes = Router();
// routes.post('/', TipoParametro.create);
// routes.get('/get', TipoParametro.getById);
// routes.get('/', TipoParametro.getAll);
// routes.put('/', TipoParametro.update);
// routes.delete('/:id', TipoParametro.delete);

// SOMENTE O ADMIN ACESSA CREATE E O DELETE
routes.post('/', authorization, TipoParametro.create);
routes.get('/:id', TipoParametro.getById);
routes.get('/',  TipoParametro.getAll);
routes.put('/', authorization, TipoParametro.update);
routes.delete('/:id', authorization,  TipoParametro.delete);


routes.use((_: Request, res: Response) => res.json({ error: "Requisição desconhecida" }));
export default routes;