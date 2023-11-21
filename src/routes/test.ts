import { Router, Request, Response } from "express";
import Test from '../controllers/test';

const routes = Router();

routes.post('/', Test.create);
routes.get('/:id', Test.getById);
routes.get('/', Test.getAll);
routes.put('/', Test.update);
routes.delete('/:id', Test.delete);

routes.use((_: Request, res: Response) => res.json({ error: "Requisição desconhecida" }));
export default routes;