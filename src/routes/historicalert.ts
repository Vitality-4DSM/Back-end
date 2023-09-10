import { Router, Request, Response } from "express";
import HistoricAlert from '../controllers/HistoricAlertController';
import { authorization , authAdmin} from "../autenticacao";

const routes = Router();
routes.post('/create', HistoricAlert.create);
routes.get('/get/:id', HistoricAlert.getById);
routes.get('/getall', HistoricAlert.getAll);
routes.put('/update/:id', HistoricAlert.update);
routes.delete('/delete/:id', HistoricAlert.delete);

// SOMENTE O ADMIN ACESSA CREATE E O DELETE
// routes.post('/create', authorization, authAdmin ,HistoricAlert.create);
// routes.get('/get/:id', authorization, HistoricAlert.getById);
// routes.get('/getall', authorization , HistoricAlert.getAll);
// routes.put('/update/:id', authorization, HistoricAlert.update);
// routes.delete('/delete/:id', authorization, authAdmin , HistoricAlert.delete);


routes.use( (_:Request,res:Response) => res.json({error:"Requisição desconhecida"}) );
export default routes;