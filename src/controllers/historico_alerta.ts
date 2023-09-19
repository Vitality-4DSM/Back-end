import { HistoricoAlerta } from "../models/historico_alerta";
import { Request, Response } from "express";

export class HistoricoAlertaController {

  // CREATE
  async create(req: Request, res: Response) {
    try {
      const historicalert = await HistoricoAlerta.create({ ...req.body });

      return res.json(historicalert);
    } catch (e) {
      return res.status(500).json({ error: "Cannot create Historic Alerta" + e });
    }
  }

  // READ
  async getAll(req: Request, res: Response) {
    try {
      const historicalert = await HistoricoAlerta.findAll();
      return res.json(historicalert);
    } catch (e) {
      return res.status(500).json({ error: "Cannot get all Historic Alerts" });
    }
  }

  async getById(req: Request, res: Response) {
    const { id } = req.body;

    try {
      const historicalert = await HistoricoAlerta.findOne({
        where: { id_historico: id },
      });
      return res.json(historicalert);
    } catch (e) {
      return res.status(500).json({ error: "Historic Alerta not found" });
    }
  }

  // UPDATE
  async update(req: Request, res: Response) {
    const { id } = req.body;

    try {
      const [updated] = await HistoricoAlerta.update(req.body, {
        where: { id_historico: id },
      });

      if (updated) {
        const updatedHistoricAlert = await HistoricoAlerta.findOne({
          where: { id_historico: id },
        });
        return res.json(updatedHistoricAlert);
      }

      throw new Error("Historic Alerta not found");
    } catch (e) {
      return res.status(500).json({ error: e });
    }
  }


  // DELETE
  async delete(req: Request, res: Response) {
    const { id } = req.body;

    try {
      const HistoricAlertToBeDeleted = await HistoricoAlerta.findOne({
        where: { id_historico: id },
      });

      if (!HistoricAlertToBeDeleted) {
        return res.status(404).json({ error: "Historic Alerta not found" });
      }
      await HistoricAlertToBeDeleted.destroy();
      return res.sendStatus(204).json({ message: "Historic Alerta deleted" });
    } catch (e) {
      return res.status(500).json({ error: "Cannot delete Historic Alerta" });
    }
  }
}

export default new HistoricoAlertaController();
