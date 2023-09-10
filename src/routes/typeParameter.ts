import { Router, Request, Response } from "express";
import TypeParameter from '../controllers/TypeParameterController';
import { authorization , authAdmin} from "../autenticacao";

const routes = Router();
routes.post('/create', TypeParameter.create);
routes.get('/get/:id', TypeParameter.getById);
routes.get('/getall', TypeParameter.getAll);
routes.put('/update/:id', TypeParameter.update);
routes.delete('/delete/:id', TypeParameter.delete);

// SOMENTE O ADMIN ACESSA CREATE E O DELETE
// routes.post('/create', authorization, authAdmin ,TypeParameter.create);
// routes.get('/get/:id', authorization, TypeParameter.getById);
// routes.get('/getall', authorization , TypeParameter.getAll);
// routes.put('/update/:id', authorization, TypeParameter.update);
// routes.delete('/delete/:id', authorization, authAdmin , TypeParameter.delete);


routes.use( (_:Request,res:Response) => res.json({error:"Requisição desconhecida"}) );
export default routes;