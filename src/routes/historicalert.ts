import { Router, Request, Response } from "express";
import HistoricAlert from '../controllers/HistoricAlertController';
import { authorization , authAdmin} from "../autenticacao";

const routes = Router();
routes.post('/', HistoricAlert.create);
routes.get('/get', HistoricAlert.getById);
routes.get('/', HistoricAlert.getAll);
routes.put('/', HistoricAlert.update);
routes.delete('/', HistoricAlert.delete);

// SOMENTE O ADMIN ACESSA CREATE E O DELETE
// routes.post('/', authorization, authAdmin ,HistoricAlert.create);
// routes.get('/get', authorization, HistoricAlert.getById);
// routes.get('/', authorization , HistoricAlert.getAll);
// routes.put('/', authorization, HistoricAlert.update);
// routes.delete('/', authorization, authAdmin , HistoricAlert.delete);


routes.use( (_:Request,res:Response) => res.json({error:"Requisição desconhecida"}) );
export default routes;