import { Parameter } from "../models/Parameter";
import { Request, Response } from "express";

export class ParameterController {

  // CREATE
  async create(req: Request, res: Response) {
    try {
      const parameter = await Parameter.create({ ...req.body });

      return res.json(parameter);
    } catch (e) {
      return res.status(500).json({ error: "Cannot create Parameter" });
    }
  }

  // READ
  async getAll(req: Request, res: Response) {
    try {
      const parameter = await Parameter.findAll();
      return res.json(parameter);
    } catch (e) {
      return res.status(500).json({ error: "Cannot get all Parameters" });
    }
  }

  async getById(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const parameter = await Parameter.findOne({
        where: { id_parametro: id },
      });
      return res.json(parameter);
    } catch (e) {
      return res.status(500).json({ error: "Parameter not found" });
    }
  }

  // UPDATE
  async update(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const [updated] = await Parameter.update(req.body, {
        where: { id_parametro: id },
      });

      if (updated) {
        const updatedParameter = await Parameter.findOne({
          where: { id_parametro: id },
        });
        return res.json(updatedParameter);
      }
      
      throw new Error("Parameter not found");
    } catch (e) {
      return res.status(500).json({ error: e});
    }
  }


  // DELETE
  async delete(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const ParameterToBeDeleted = await Parameter.findOne({
        where: { id_parametro: id },
      });

      if (!ParameterToBeDeleted) {
        return res.status(404).json({ error: "Parameter not found" });
      }
      await ParameterToBeDeleted.destroy();
      return res.sendStatus(204).json({ message: "Parameter deleted" });
    } catch (e) {
      return res.status(500).json({ error: "Cannot delete Parameter" });
    }
  }
}

export default new ParameterController();
