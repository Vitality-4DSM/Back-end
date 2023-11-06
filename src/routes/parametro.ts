import { Router, Request, Response } from "express";
import Parametro from '../controllers/parametro';
import { authorization} from "../autenticacao";

const routes = Router();
// routes.post('/', Parametro.create);
// routes.get('/get', Parametro.getById);
// routes.get('/', Parametro.getAll);
// routes.put('/', Parametro.update);
// routes.delete('/', Parametro.delete);

// SOMENTE O ADMIN ACESSA CREATE E O DELETE
routes.post('/', authorization, Parametro.create);
routes.get('/:id', Parametro.getById);
routes.get('/', Parametro.getAll);
routes.put('/', authorization, Parametro.update);
routes.delete('/', authorization, Parametro.delete);
routes.get('/fkparameter' , Parametro.getByFkTipoParametro)

routes.use((_: Request, res: Response) => res.json({ error: "Requisição desconhecida" }));
export default routes;