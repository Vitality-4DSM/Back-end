import { Router, Request, Response } from "express";
import valor from '../controllers/ValorController';
import { authorization , authAdmin} from "../autenticacao";

const routes = Router();
routes.post('/', valor.create);
routes.get('/get', valor.getById);
routes.get('/', valor.getAll);
routes.put('/', valor.update);
routes.delete('/', valor.delete);

// SOMENTE O ADMIN ACESSA CREATE E O DELETE
// routes.post('/', authorization, authAdmin ,valor.create);
// routes.get('/get', authorization, valor.getById);
// routes.get('/', authorization , valor.getAll);
// routes.put('/', authorization, valor.update);
// routes.delete('/', authorization, authAdmin , valor.delete);


routes.use( (_:Request,res:Response) => res.json({error:"Requisição desconhecida"}) );
export default routes;