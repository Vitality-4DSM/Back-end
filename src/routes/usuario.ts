import { Router, Request, Response } from "express";
import user from '../controllers/usuario';
import { authorization } from "../autenticacao";

const routes = Router();
// routes.post('/', user.create);
// routes.get('/get', user.getById);
// routes.get('/', user.getAll);
// routes.put('/', user.update);
// routes.delete('/', user.delete);

// SOMENTE O ADMIN ACESSA CREATE E O DELETE
routes.post('/', authorization, user.create);
routes.get('/get', authorization, user.getById);
routes.get('/', authorization, user.getAll);
routes.put('/', authorization, user.update);
routes.delete('/', authorization,  user.delete);


routes.use((_: Request, res: Response) => res.json({ error: "Requisição desconhecida" }));
export default routes;