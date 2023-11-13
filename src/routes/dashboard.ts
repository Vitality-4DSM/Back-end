import { Router, Request, Response } from "express";
import { authorization} from "../autenticacao";
import dashboard from '../controllers/dashboard';
import { apiKey } from "../middlewares";

const routes = Router();

routes.get('/:id', apiKey, dashboard.getAll);
routes.get('/nometabela/:id', apiKey, dashboard.getNometabela);

routes.use((_: Request, res: Response) => res.json({ error: "Requisição desconhecida" }));
export default routes;