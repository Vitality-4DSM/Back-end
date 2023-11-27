import { Router, Request, Response } from "express";
import Parametro from '../controllers/parametro';
import { authorization} from "../autenticacao";
import { apiKey } from "../middlewares";

const routes = Router();

routes.post('/', apiKey, authorization, Parametro.create);
routes.get('/:id', apiKey, Parametro.getById);
routes.get('/', apiKey, Parametro.getAll);
routes.put('/', apiKey, authorization, Parametro.update);
routes.delete('/', apiKey, authorization, Parametro.delete);
routes.get('/fkparameter/:id:selecionado' , apiKey, Parametro.getByFkTipoParametro)

routes.use((_: Request, res: Response) => res.json({ error: "Requisição desconhecida" }));
export default routes;