import { Valor } from "../models/Valor";
import { Request, Response } from "express";

export class ValorController {

  // CREATE
  async create(req: Request, res: Response) {
    try {
      const valor = await Valor.create({ ...req.body });

      return res.json(valor);
    } catch (e) {
      return res.status(500).json({ error: "Cannot create Valor" });
    }
  }

  // READ
  async getAll(req: Request, res: Response) {
    try {
      const valor = await Valor.findAll();
      return res.json(valor);
    } catch (e) {
      return res.status(500).json({ error: "Cannot get all Valors" });
    }
  }

  async getById(req: Request, res: Response) {
    const { id } = req.body;

    try {
      const valor = await Valor.findOne({
        where: { id_valor: id },
      });
      return res.json(valor);
    } catch (e) {
      return res.status(500).json({ error: "Valor not found" });
    }
  }

  // UPDATE
  async update(req: Request, res: Response) {
    const { id } = req.body;

    try {
      const [updated] = await Valor.update(req.body, {
        where: { id_valor: id },
      });

      if (updated) {
        const updatedValor = await Valor.findOne({
          where: { id_valor: id },
        });
        return res.json(updatedValor);
      }
      
      throw new Error("Valor not found");
    } catch (e) {
      return res.status(500).json({ error: e});
    }
  }


  // DELETE
  async delete(req: Request, res: Response) {
    const { id } = req.body;

    try {
      const ValorToBeDeleted = await Valor.findOne({
        where: { id_usuario: id },
      });

      if (!ValorToBeDeleted) {
        return res.status(404).json({ error: "Valor not found" });
      }
      await ValorToBeDeleted.destroy();
      return res.sendStatus(204).json({ message: "Valor deleted" });
    } catch (e) {
      return res.status(500).json({ error: "Cannot delete Valor" });
    }
  }
}

export default new ValorController();
