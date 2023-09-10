import { Router, Request, Response } from "express";
import user from '../controllers/UserController';
import { authorization , authAdmin} from "../autenticacao";

const routes = Router();
routes.post('/create', user.create);
routes.get('/get/:id', user.getById);
routes.get('/getall', user.getAll);
routes.put('/update/:id', user.update);
routes.delete('/delete/:id', user.delete);

// SOMENTE O ADMIN ACESSA CREATE E O DELETE
// routes.post('/create', authorization, authAdmin ,user.create);
// routes.get('/get/:id', authorization, user.getById);
// routes.get('/getall', authorization , user.getAll);
// routes.put('/update/:id', authorization, user.update);
// routes.delete('/delete/:id', authorization, authAdmin , user.delete);


routes.use( (_:Request,res:Response) => res.json({error:"Requisição desconhecida"}) );
export default routes;