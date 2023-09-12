import { Alert } from "../models/Alert";
import { Request, Response } from "express";

export class AlertController {

  // CREATE
  async create(req: Request, res: Response) {
    try {
      const alert = await Alert.create({ ...req.body });

      return res.json(alert);
    } catch (e) {
      return res.status(500).json({ error: "Cannot create Alert" });
    }
  }

  // READ
  async getAll(req: Request, res: Response) {
    try {
      const alert = await Alert.findAll();
      return res.json(alert);
    } catch (e) {
      return res.status(500).json({ error: "Cannot get all Alerts" });
    }
  }

  async getById(req: Request, res: Response) {
    const { id } = req.body;

    try {
      const alert = await Alert.findOne({
        where: { id_alerta: id },
      });
      return res.json(alert);
    } catch (e) {
      return res.status(500).json({ error: "Alert not found" });
    }
  }

  // UPDATE
  async update(req: Request, res: Response) {
    const { id } = req.body;

    try {
      const [updated] = await Alert.update(req.body, {
        where: { id_alerta: id },
      });

      if (updated) {
        const updatedAlert = await Alert.findOne({
          where: { id_alerta: id },
        });
        return res.json(updatedAlert);
      }
      
      throw new Error("Alert not found");
    } catch (e) {
      return res.status(500).json({ error: e});
    }
  }


  // DELETE
  async delete(req: Request, res: Response) {
    const { id } = req.body;

    try {
      const AlertToBeDeleted = await Alert.findOne({
        where: { id_alerta: id },
      });

      if (!AlertToBeDeleted) {
        return res.status(404).json({ error: "Alert not found" });
      }
      await AlertToBeDeleted.destroy();
      return res.sendStatus(204).json({ message: "Alert deleted" });
    } catch (e) {
      return res.status(500).json({ error: "Cannot delete Alert" });
    }
  }
}

export default new AlertController();
