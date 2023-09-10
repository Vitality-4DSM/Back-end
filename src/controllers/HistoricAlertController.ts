import { HistoricAlert } from "../models/HistoricAlert";
import { Request, Response } from "express";

export class HistoricAlertController {

  // CREATE
  async create(req: Request, res: Response) {
    try {
      const historicalert = await HistoricAlert.create({ ...req.body });

      return res.json(historicalert);
    } catch (e) {
      return res.status(500).json({ error: "Cannot create Historic Alert" });
    }
  }

  // READ
  async getAll(req: Request, res: Response) {
    try {
      const historicalert = await HistoricAlert.findAll();
      return res.json(historicalert);
    } catch (e) {
      return res.status(500).json({ error: "Cannot get all Historic Alerts" });
    }
  }

  async getById(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const historicalert = await HistoricAlert.findOne({
        where: { id_historico: id },
      });
      return res.json(historicalert);
    } catch (e) {
      return res.status(500).json({ error: "Historic Alert not found" });
    }
  }

  // UPDATE
  async update(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const [updated] = await HistoricAlert.update(req.body, {
        where: { id_historico: id },
      });

      if (updated) {
        const updatedHistoricAlert = await HistoricAlert.findOne({
          where: { id_historico: id },
        });
        return res.json(updatedHistoricAlert);
      }
      
      throw new Error("Historic Alert not found");
    } catch (e) {
      return res.status(500).json({ error: e});
    }
  }


  // DELETE
  async delete(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const HistoricAlertToBeDeleted = await HistoricAlert.findOne({
        where: { id_historico: id },
      });

      if (!HistoricAlertToBeDeleted) {
        return res.status(404).json({ error: "Historic Alert not found" });
      }
      await HistoricAlertToBeDeleted.destroy();
      return res.sendStatus(204).json({ message: "Historic Alert deleted" });
    } catch (e) {
      return res.status(500).json({ error: "Cannot delete Historic Alert" });
    }
  }
}

export default new HistoricAlertController();
