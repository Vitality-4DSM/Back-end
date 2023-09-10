import { Router, Request, Response } from "express";
import Parameter from '../controllers/ParameterController';
import { authorization , authAdmin} from "../autenticacao";

const routes = Router();
routes.post('/create', Parameter.create);
routes.get('/get/:id', Parameter.getById);
routes.get('/getall', Parameter.getAll);
routes.put('/update/:id', Parameter.update);
routes.delete('/delete/:id', Parameter.delete);

// SOMENTE O ADMIN ACESSA CREATE E O DELETE
// routes.post('/create', authorization, authAdmin ,Parameter.create);
// routes.get('/get/:id', authorization, Parameter.getById);
// routes.get('/getall', authorization , Parameter.getAll);
// routes.put('/update/:id', authorization, Parameter.update);
// routes.delete('/delete/:id', authorization, authAdmin , Parameter.delete);


routes.use( (_:Request,res:Response) => res.json({error:"Requisição desconhecida"}) );
export default routes;