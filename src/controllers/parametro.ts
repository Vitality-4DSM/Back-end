import { Parametro } from "../models/parametro";
import { Request, Response } from "express";
import { TipoParametro } from "../models/tipo_parametro";

export class ParametroController {

  // CREATE
  async create(req: Request, res: Response) {
    try {
      const parameter = await Parametro.create({ ...req.body });

      return res.json(parameter);
    } catch (e) {
      return res.status(500).json({ error: "Cannot create Parametro" + e });
    }
  }

  // READ
  async getAll(req: Request, res: Response) {
    try {
      const parameter = await Parametro.findAll();
      return res.json(parameter);
    } catch (e) {
      return res.status(500).json({ error: "Cannot get all Parameters" });
    }
  }

  async getById(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const parameter = await Parametro.findOne({
        where: { id_parametro: id }, include: [{all: true}]
      });
      return res.json(parameter);
    } catch (e) {
      return res.status(500).json({ error: "Parametro not found" });
    }
  }

  // UPDATE
  async update(req: Request, res: Response) {
    const { id } = req.body;

    try {
      const [updated] = await Parametro.update(req.body, {
        where: { id_parametro: id },
      });

      if (updated) {
        const updatedParameter = await Parametro.findOne({
          where: { id_parametro: id },
        });
        return res.json(updatedParameter);
      }

      throw new Error("Parametro not found");
    } catch (e) {
      return res.status(500).json({ error: e });
    }
  }


  // DELETE
  async delete(req: Request, res: Response) {
    const { id } = req.body;

    try {
      const ParameterToBeDeleted = await Parametro.findOne({
        where: { id_parametro: id },
      });

      if (!ParameterToBeDeleted) {
        return res.status(404).json({ error: "Parametro not found" });
      }
      await ParameterToBeDeleted.destroy();
      return res.sendStatus(204);
    } catch (e) {
      return res.status(500).json({ error: "Cannot delete Parametro" });
    }
  }

  // leitura de parametro por tipo de parametro
  async getByFkTipoParametro(req: Request, res: Response) {
    const { id } = req.body;

    try {
      const parameter = await Parametro.findAll({
        where: { fk_tipo_parametro: id },
      });
      return res.json(parameter);
    } catch (e) {
      return res.status(500).json({ error: "Parametro not found" });
    }
  }
}




export default new ParametroController();
