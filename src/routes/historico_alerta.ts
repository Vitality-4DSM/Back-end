import { Router, Request, Response } from "express";
import HistoricoAlerta from '../controllers/historico_alerta';
import { authorization, authAdmin } from "../autenticacao";

const routes = Router();
routes.post('/', HistoricoAlerta.create);
routes.get('/get', HistoricoAlerta.getById);
routes.get('/', HistoricoAlerta.getAll);
routes.put('/', HistoricoAlerta.update);
routes.delete('/', HistoricoAlerta.delete);

// SOMENTE O ADMIN ACESSA CREATE E O DELETE
// routes.post('/', authorization, authAdmin ,HistoricoAlerta.create);
// routes.get('/get', authorization, HistoricoAlerta.getById);
// routes.get('/', authorization , HistoricoAlerta.getAll);
// routes.put('/', authorization, HistoricoAlerta.update);
// routes.delete('/', authorization, authAdmin , HistoricoAlerta.delete);


routes.use((_: Request, res: Response) => res.json({ error: "Requisição desconhecida" }));
export default routes;