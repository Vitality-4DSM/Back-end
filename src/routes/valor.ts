import { Router, Request, Response } from "express";
import valor from '../controllers/valor';
import { authorization } from "../autenticacao";
import { apiKey } from "../middlewares";

const routes = Router();

routes.post('/', apiKey, authorization, valor.create);
routes.get('/get', apiKey, valor.getById);
routes.get('/', apiKey, valor.getAll);
routes.put('/', apiKey, authorization, valor.update);
routes.delete('/', apiKey, authorization, valor.delete);

routes.use((_: Request, res: Response) => res.json({ error: "Requisição desconhecida" }));
export default routes;