import { TipoParametro } from "../models/tipo_parametro";
import { Request, Response } from "express";

export class TipoParametroController {

  // CREATE
  async create(req: Request, res: Response) {
    try {
      const typeParameter = await TipoParametro.create({ ...req.body });
      return res.json(typeParameter);
    } catch (e) {
      return res.status(500).json({ error: "Cannot create TipoParametro" });
    }
  }

  // READ
  async getAll(req: Request, res: Response) {
    try {
      const typeParameter = await TipoParametro.findAll();
      return res.json(typeParameter);
    } catch (e) {
      return res.status(500).json({ error: "Cannot get all TypeParameters" });
    }
  }

  async getById(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const typeParameter = await TipoParametro.findOne({
        where: { id_tipo_parametro: id },
      });
      return res.json(typeParameter);
    } catch (e) {
      return res.status(500).json({ error: "TipoParametro not found" });
    }
  }

  // UPDATE
  async update(req: Request, res: Response) {
    const { id } = req.body;

    try {
      const [updated] = await TipoParametro.update(req.body, {
        where: { id_tipo_parametro: id },
      });

      if (updated) {
        const updatedTypeParameter = await TipoParametro.findOne({
          where: { id_tipo_parametro: id },
        });
        return res.json(updatedTypeParameter);
      }

      throw new Error("TipoParametro not found");
    } catch (e) {
      return res.status(500).json({ error: e });
    }
  }


  // DELETE
  async delete(req: Request, res: Response) {
    const { id } = req.params;
    try {
      await TipoParametro.destroy({where: { id_tipo_parametro: id }});
      return res.json({ message: "TipoParametro deletado." });
    } catch (e) {
      return res.status(500).json({ error: "Cannot delete TipoParametro" + e });
    }
  }
}

export default new TipoParametroController();
