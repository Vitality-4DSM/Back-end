import { Router, Request, Response } from "express";
import alert from '../controllers/alerta';
import { authorization } from "../autenticacao";

const routes = Router();

routes.post('/', authorization, alert.create);
routes.get('/get', alert.getById);
routes.get('/', alert.getAll);
routes.put('/', authorization, alert.update);
routes.delete('/:id', authorization, alert.delete);

routes.use((_: Request, res: Response) => res.json({ error: "Requisição desconhecida" }));
export default routes;