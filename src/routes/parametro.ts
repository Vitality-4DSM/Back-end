import { Router, Request, Response } from "express";
import Parametro from '../controllers/parametro';
import { authorization, authAdmin } from "../autenticacao";

const routes = Router();
routes.post('/', Parametro.create);
routes.get('/get', Parametro.getById);
routes.get('/', Parametro.getAll);
routes.put('/', Parametro.update);
routes.delete('/', Parametro.delete);

// SOMENTE O ADMIN ACESSA CREATE E O DELETE
// routes.post('/', authorization, authAdmin ,Parametro.create);
// routes.get('/get', authorization, Parametro.getById);
// routes.get('/', authorization , Parametro.getAll);
// routes.put('/', authorization, Parametro.update);
// routes.delete('/', authorization, authAdmin , Parametro.delete);


routes.use((_: Request, res: Response) => res.json({ error: "Requisição desconhecida" }));
export default routes;