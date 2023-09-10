import { Router, Request, Response } from "express";
import valor from '../controllers/ValorController';
import { authorization , authAdmin} from "../autenticacao";

const routes = Router();
routes.post('/create', valor.create);
routes.get('/get/:id', valor.getById);
routes.get('/getall', valor.getAll);
routes.put('/update/:id', valor.update);
routes.delete('/delete/:id', valor.delete);

// SOMENTE O ADMIN ACESSA CREATE E O DELETE
// routes.post('/create', authorization, authAdmin ,valor.create);
// routes.get('/get/:id', authorization, valor.getById);
// routes.get('/getall', authorization , valor.getAll);
// routes.put('/update/:id', authorization, valor.update);
// routes.delete('/delete/:id', authorization, authAdmin , valor.delete);


routes.use( (_:Request,res:Response) => res.json({error:"Requisição desconhecida"}) );
export default routes;