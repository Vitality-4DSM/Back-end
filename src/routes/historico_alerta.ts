import { Router, Request, Response } from "express";
import HistoricoAlerta from '../controllers/historico_alerta';
import { authorization } from "../autenticacao";
import { apiKey } from "../middlewares";

const routes = Router();

// SOMENTE O ADMIN ACESSA CREATE E O DELETE
routes.post('/', authorization, apiKey, HistoricoAlerta.create);
routes.get('/get', authorization, apiKey, HistoricoAlerta.getById);
routes.get('/', authorization, apiKey, HistoricoAlerta.getAll);
routes.put('/', authorization, apiKey, HistoricoAlerta.update);
routes.delete('/', authorization, apiKey, HistoricoAlerta.delete);

routes.use((_: Request, res: Response) => res.json({ error: "Requisição desconhecida" }));
export default routes;