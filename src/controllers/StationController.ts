import { Station } from "../models/Station";
import { Request, Response } from "express";

export class StationController {

  // CREATE
  async create(req: Request, res: Response) {
    try {
      const station = await Station.create({ ...req.body });

      return res.json(station);
    } catch (e) {
      return res.status(500).json({ error: "Cannot create Station" });
    }
  }

  // READ
  async getAll(req: Request, res: Response) {
    try {
      const stations = await Station.findAll();
      return res.json(stations);
    } catch (e) {
      return res.status(500).json({ error: "Cannot get all Stations" });
    }
  }

  async getById(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const station = await Station.findOne({
        where: { id_estacao: id },
      });
      return res.json(station);
    } catch (e) {
      return res.status(500).json({ error: "Station not found" });
    }
  }

  // UPDATE
  async update(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const [updated] = await Station.update(req.body, {
        where: { id_estacao: id },
      });

      if (updated) {
        const updatedStation = await Station.findOne({
          where: { id_estacao: id },
        });
        return res.json(updatedStation);
      }
      
      throw new Error("Station not found");
    } catch (e) {
      return res.status(500).json({ error: e});
    }
  }


  // DELETE
  async delete(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const userToBeDeleted = await Station.findOne({
        where: { id_estacao: id },
      });

      if (!userToBeDeleted) {
        return res.status(404).json({ error: "Station not found" });
      }
      await userToBeDeleted.destroy();
      return res.sendStatus(204);
    } catch (e) {
      return res.status(500).json({ error: "Cannot delete Station" });
    }
  }
}

export default new StationController();
