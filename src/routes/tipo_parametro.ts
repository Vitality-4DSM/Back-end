import { Router, Request, Response } from "express";
import TipoParametro from '../controllers/tipo_parametro';
import { authorization, authAdmin } from "../autenticacao";

const routes = Router();
routes.post('/', TipoParametro.create);
routes.get('/get', TipoParametro.getById);
routes.get('/', TipoParametro.getAll);
routes.put('/', TipoParametro.update);
routes.delete('/', TipoParametro.delete);

// SOMENTE O ADMIN ACESSA CREATE E O DELETE
// routes.post('/', authorization, authAdmin ,TipoParametro.create);
// routes.get('/get', authorization, TipoParametro.getById);
// routes.get('/', authorization , TipoParametro.getAll);
// routes.put('/', authorization, TipoParametro.update);
// routes.delete('/', authorization, authAdmin , TipoParametro.delete);


routes.use((_: Request, res: Response) => res.json({ error: "Requisição desconhecida" }));
export default routes;