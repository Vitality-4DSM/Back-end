import { Router, Request, Response } from "express";
import station from '../controllers/StationController';
import { authorization , authAdmin} from "../autenticacao";

const routes = Router();
routes.post('/create', station.create);
routes.get('/get/:id', station.getById);
routes.get('/getall', station.getAll);
routes.put('/update/:id', station.update);
routes.delete('/delete/:id', station.delete);

// SOMENTE O ADMIN ACESSA CREATE E O DELETE
// routes.post('/create', authorization, authAdmin ,station.create);
// routes.get('/get/:id', authorization, station.getById);
// routes.get('/getall', authorization , station.getAll);
// routes.put('/update/:id', authorization, station.update);
// routes.delete('/delete/:id', authorization, authAdmin , station.delete);


routes.use( (_:Request,res:Response) => res.json({error:"Requisição desconhecida"}) );
export default routes;