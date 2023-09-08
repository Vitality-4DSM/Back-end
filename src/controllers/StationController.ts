import { Station } from "../models/Station";
import { Request, Response } from "express";

export class StationController {


  async create(req: Request, res: Response) {
    try {
      const station = await Station.create({ ...req.body });

      return res.json(station);
    } catch (e) {
      return res.status(500).json({ error: "Cannot create Station" });
    }
  }

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

  // async update(req: Request, res: Response) {
  //   const { id_estacao } = req.body;
  //   const id_estacao2: string[] = [];

  //   id_estacao.forEach((id: string) => {
  //     id && id_estacao2.push(id);
  //   });

  //   try {
  //     await Station.update(
  //       // { envio: true },
  //       // {
  //       //   where: {
  //       //     id_estacao: id_estacao2,
  //       //     estado: true,
  //       //   },
  //       // }
  //     );
  //   } catch (e) {
  //     console.error(e);
  //     return res.status(500).json({ error: "Cannot update email" });
  //   }
  // }


}

export default new StationController();
