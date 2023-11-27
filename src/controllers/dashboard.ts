import { Request, Response } from "express";
import { TipoParametro } from "../models/tipo_parametro";
import { Parametro } from "../models/parametro";
import { Valor } from "../models/valor";
import tipo_parametro from "./tipo_parametro";

export class DashboardController {

    // READ
    async getAll(req: Request, res: Response) {
        const id = req.params.id;
        try {
            const response = await Parametro.findAll({
                where: { fk_estacao: id },
                include: TipoParametro
            });
            const id_parametro = response.map((parametro: any) => parametro.id_parametro);
            const json = response.map((parametro: any) => parametro.tipo_parametro.json);
            const dados  = await Valor.findAll({
                where: { fk_parametro: id_parametro } , include: [{all: true}] , 
                order: [['unixtime', 'ASC']],
            });
            return res.json(dados);
        } catch (e) {
            return res.status(500).json({ error: "Cannot get all Alerts" });
        }
    }

    async getNometabela(req: Request, res: Response) {
        const id = req.params.id;
        try {
            const response = await Parametro.findAll({
                where: { fk_estacao: id }, 
                include: TipoParametro
            });
            
            const json = response.map((parametro: any) => parametro.tipo_parametro.nome);
            const fk_tipoparametro = response.map((parametro: any) => parametro.fk_tipo_parametro);
            return res.json({json,fk_tipoparametro});
        } catch (e) {
            return res.status(500).json({ error: "Cannot get all Alerts" });
        }
    }

}

export default new DashboardController();