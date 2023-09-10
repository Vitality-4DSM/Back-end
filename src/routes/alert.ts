import { Router, Request, Response } from "express";
import alert from '../controllers/AlertController';
import { authorization , authAdmin} from "../autenticacao";

const routes = Router();
routes.post('/create', alert.create);
routes.get('/get/:id', alert.getById);
routes.get('/getall', alert.getAll);
routes.put('/update/:id', alert.update);
routes.delete('/delete/:id', alert.delete);

// SOMENTE O ADMIN ACESSA CREATE E O DELETE
// routes.post('/create', authorization, authAdmin ,alert.create);
// routes.get('/get/:id', authorization, alert.getById);
// routes.get('/getall', authorization , alert.getAll);
// routes.put('/update/:id', authorization, alert.update);
// routes.delete('/delete/:id', authorization, authAdmin , alert.delete);

routes.use( (_:Request,res:Response) => res.json({error:"Requisição desconhecida"}) );
export default routes;