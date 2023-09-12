import { Router, Request, Response } from "express";
import TypeParameter from '../controllers/TypeParameterController';
import { authorization , authAdmin} from "../autenticacao";

const routes = Router();
routes.post('/', TypeParameter.create);
routes.get('/get', TypeParameter.getById);
routes.get('/', TypeParameter.getAll);
routes.put('/', TypeParameter.update);
routes.delete('/', TypeParameter.delete);

// SOMENTE O ADMIN ACESSA CREATE E O DELETE
// routes.post('/', authorization, authAdmin ,TypeParameter.create);
// routes.get('/get', authorization, TypeParameter.getById);
// routes.get('/', authorization , TypeParameter.getAll);
// routes.put('/', authorization, TypeParameter.update);
// routes.delete('/', authorization, authAdmin , TypeParameter.delete);


routes.use( (_:Request,res:Response) => res.json({error:"Requisição desconhecida"}) );
export default routes;