import { Router, Request, Response } from "express";
import Parametro from '../controllers/parametro';
import { authorization} from "../autenticacao";
import { apiKey } from "../middlewares";

const routes = Router();
// routes.post('/', Parametro.create);
// routes.get('/get', Parametro.getById);
// routes.get('/', Parametro.getAll);
// routes.put('/', Parametro.update);
// routes.delete('/', Parametro.delete);

// SOMENTE O ADMIN ACESSA CREATE E O DELETE
routes.post('/', authorization, apiKey, Parametro.create);
routes.get('/:id', apiKey, Parametro.getById);
routes.get('/', apiKey, Parametro.getAll);
routes.put('/', apiKey, authorization, Parametro.update);
routes.delete('/', apiKey, authorization, Parametro.delete);
routes.get('/fkparameter' , apiKey, Parametro.getByFkTipoParametro)

routes.use((_: Request, res: Response) => res.json({ error: "Requisição desconhecida" }));
export default routes;