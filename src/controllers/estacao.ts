import { Estacao } from "../models/estacao";
import { Request, Response } from "express";

export class EstacaoController {

  // CREATE
  async create(req: Request, res: Response) {
    try {
      const station = await Estacao.create({ ...req.body });

      return res.json(station);
    } catch (e) {
      return res.status(500).json({ error: "Cannot create Estacao" });
    }
  }

  // READ
  async getAll(req: Request, res: Response) {
    try {
      const stations = await Estacao.findAll();
      return res.json(stations);
    } catch (e) {
      return res.status(500).json({ error: "Cannot get all Stations" });
    }
  }

  async getById(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const station = await Estacao.findOne({
        where: { id_estacao: id },
      });
      return res.json(station);
    } catch (e) {
      return res.status(500).json({ error: "Estacao not found" });
    }
  }

  // UPDATE
  async update(req: Request, res: Response) {
    const { id } = req.body;

    try {
      const [updated] = await Estacao.update(req.body, {
        where: { id_estacao: id },
      });

      if (updated) {
        const updatedStation = await Estacao.findOne({
          where: { id_estacao: id },
        });
        return res.json(updatedStation);
      }

      throw new Error("Estacao not found");
    } catch (e) {
      return res.status(500).json({ error: e });
    }
  }


  // DELETE
  async delete(req: Request, res: Response) {
    const { id } = req.params;
    try {
      await Estacao.destroy( {where: { id_estacao: id }});
      return res.json({ message: "Estação deletada." });
    } catch (e) {
      return res.status(500).json({ error: "Cannot delete Estacao" });
    }
  }
}

export default new EstacaoController();
