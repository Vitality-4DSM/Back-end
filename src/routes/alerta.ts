import { Router, Request, Response } from "express";
import alert from '../controllers/alerta';
import { authorization, authAdmin } from "../autenticacao";

const routes = Router();
routes.post('/', alert.create);
routes.get('/get', alert.getById);
routes.get('/', alert.getAll);
routes.put('/', alert.update);
routes.delete('/', alert.delete);

// SOMENTE O ADMIN ACESSA CREATE E O DELETE
// routes.post('/', authorization, authAdmin ,alert.create);
// routes.get('/get', authorization, alert.getById);
// routes.get('/', authorization , alert.getAll);
// routes.put('/', authorization, alert.update);
// routes.delete('/', authorization, authAdmin , alert.delete);

routes.use((_: Request, res: Response) => res.json({ error: "Requisição desconhecida" }));
export default routes;