import { Router, Request, Response } from "express";
import { authorization} from "../autenticacao";
import dashboard from '../controllers/dashboard';

const routes = Router();

routes.get('/:id', dashboard.getAll);
routes.get('/nometabela/:id', dashboard.getNometabela);

routes.use((_: Request, res: Response) => res.json({ error: "Requisição desconhecida" }));
export default routes;