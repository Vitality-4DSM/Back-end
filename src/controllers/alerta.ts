import { Alerta } from "../models/alerta";
import { Request, Response } from "express";
import { Parametro } from "../models/parametro";

export class AlertaController {

  // CREATE
  async create(req: Request, res: Response) {
    try {
      const alert = await Alerta.create({ ...req.body });

      return res.json(alert);
    } catch (e) {
      return res.status(500).json({ error: "Cannot create Alerta" + e});
    }
  }

  // READ
  async getAll(req: Request, res: Response) {
    try {
      const alert = await Alerta.findAll({include: Parametro});
      return res.json(alert);
    } catch (e) {
      return res.status(500).json({ error: "Cannot get all Alerts" });
    }
  }

  async getById(req: Request, res: Response) {
    const { id } = req.body;

    try {
      const alert = await Alerta.findOne({
        where: { id_alerta: id },
      });
      return res.json(alert);
    } catch (e) {
      return res.status(500).json({ error: "Alerta not found" });
    }
  }

  // UPDATE
  async update(req: Request, res: Response) {
    const { id } = req.body;

    try {
      const [updated] = await Alerta.update(req.body, {
        where: { id_alerta: id },
      });

      if (updated) {
        const updatedAlert = await Alerta.findOne({
          where: { id_alerta: id },
        });
        return res.json(updatedAlert);
      }

      throw new Error("Alerta not found");
    } catch (e) {
      return res.status(500).json({ error: e });
    }
  }


  // DELETE
  async delete(req: Request, res: Response) {
    const { id } = req.body;

    try {
      const AlertToBeDeleted = await Alerta.findOne({
        where: { id_alerta: id },
      });

      if (!AlertToBeDeleted) {
        return res.status(404).json({ error: "Alerta not found" });
      }
      await AlertToBeDeleted.destroy();
      return res.sendStatus(204).json({ message: "Alerta deleted" });
    } catch (e) {
      return res.status(500).json({ error: "Cannot delete Alerta" });
    }
  }
}

export default new AlertaController();
