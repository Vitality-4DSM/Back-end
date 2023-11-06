import { Router, Request, Response } from "express";
import login from "../controllers/login";
import station from "./estacao";
import user from "./usuario";
import valor from "./valor";
import typeParameter from "./tipo_parametro";
import parameter from "./parametro";
import alert from "./alerta";
import historicAlert from "./historico_alerta";
import dashboard from "./dashboard";

const routes = Router();
routes.post("/login", login);
routes.use("/station", station);
routes.use("/user", user);
routes.use("/valor", valor);
routes.use("/typeparameter", typeParameter);
routes.use("/parameter", parameter);
routes.use("/alert", alert);
routes.use("/historicalert", historicAlert);
routes.use("/dashboard", dashboard)

routes.use((_: Request, res: Response) => res.json({ error: "Requisição desconhecida" }));
export default routes;