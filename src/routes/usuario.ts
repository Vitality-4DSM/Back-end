import { Router, Request, Response } from "express";
import user from '../controllers/usuario';
import { authorization } from "../autenticacao";

const routes = Router();

// SOMENTE O ADMIN ACESSA CREATE E O DELETE
routes.post('/', authorization, user.create);
routes.get('/:id', authorization, user.getById);
routes.get('/', authorization, user.getAll);
routes.put('/', authorization, user.update);
routes.delete('/:id', authorization, user.delete);
routes.get('/email/:email', user.getByEmail);

routes.use((_: Request, res: Response) => res.json({ error: "Requisição desconhecida" }));
export default routes;