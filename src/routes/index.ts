import { Router, Request, Response } from "express";
import station from './station';
import login from '../controllers/Login';

const routes = Router();
routes.post('/login', login);
routes.use("/station", station);

// underscore atua como um espaço reservado para um argumento que desejamos ignorar
routes.use( (_:Request,res:Response) => res.json({error:"Requisição desconhecida"}) );
export default routes;