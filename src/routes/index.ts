import { Router, Request, Response } from "express";
import login from "../controllers/Login";
import station from "./station";
import user from "./user";
import valor from "./valor";
import typeParameter from "./typeParameter";
import parameter from "./parameter";
import alert from "./alert";
import historicAlert from "./historicalert";

const routes = Router();
routes.post("/login", login);
routes.use("/station", station);
routes.use("/user", user);
routes.use("/valor", valor);
routes.use("/typeparameter", typeParameter);
routes.use("/parameter", parameter);
routes.use("/alert", alert);
routes.use("/historicalert", historicAlert);


routes.use( (_:Request,res:Response) => res.json({error:"Requisição desconhecida"}) );
export default routes;