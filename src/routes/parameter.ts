import { Router, Request, Response } from "express";
import Parameter from '../controllers/ParameterController';
import { authorization , authAdmin} from "../autenticacao";

const routes = Router();
routes.post('/', Parameter.create);
routes.get('/get', Parameter.getById);
routes.get('/', Parameter.getAll);
routes.put('/', Parameter.update);
routes.delete('/', Parameter.delete);

// SOMENTE O ADMIN ACESSA CREATE E O DELETE
// routes.post('/', authorization, authAdmin ,Parameter.create);
// routes.get('/get', authorization, Parameter.getById);
// routes.get('/', authorization , Parameter.getAll);
// routes.put('/', authorization, Parameter.update);
// routes.delete('/', authorization, authAdmin , Parameter.delete);


routes.use( (_:Request,res:Response) => res.json({error:"Requisição desconhecida"}) );
export default routes;