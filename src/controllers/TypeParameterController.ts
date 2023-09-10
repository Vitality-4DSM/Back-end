import { TypeParameter } from "../models/TypeParameter";
import { Request, Response } from "express";

export class TypeParameterController {

  // CREATE
  async create(req: Request, res: Response) {
    try {
      const typeParameter = await TypeParameter.create({ ...req.body });

      return res.json(typeParameter);
    } catch (e) {
      return res.status(500).json({ error: "Cannot create TypeParameter" });
    }
  }

  // READ
  async getAll(req: Request, res: Response) {
    try {
      const typeParameter = await TypeParameter.findAll();
      return res.json(TypeParameter);
    } catch (e) {
      return res.status(500).json({ error: "Cannot get all TypeParameters" });
    }
  }

  async getById(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const typeParameter = await TypeParameter.findOne({
        where: { id_tipo_parametro: id },
      });
      return res.json(typeParameter);
    } catch (e) {
      return res.status(500).json({ error: "TypeParameter not found" });
    }
  }

  // UPDATE
  async update(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const [updated] = await TypeParameter.update(req.body, {
        where: { id_tipo_parametro: id },
      });

      if (updated) {
        const updatedTypeParameter = await TypeParameter.findOne({
          where: { id_tipo_parametro: id },
        });
        return res.json(updatedTypeParameter);
      }
      
      throw new Error("TypeParameter not found");
    } catch (e) {
      return res.status(500).json({ error: e});
    }
  }


  // DELETE
  async delete(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const TypeParameterToBeDeleted = await TypeParameter.findOne({
        where: { id_tipo_parametro: id },
      });

      if (!TypeParameterToBeDeleted) {
        return res.status(404).json({ error: "TypeParameter not found" });
      }
      await TypeParameterToBeDeleted.destroy();
      return res.sendStatus(204).json({ message: "TypeParameter deleted" });
    } catch (e) {
      return res.status(500).json({ error: "Cannot delete TypeParameter" });
    }
  }
}

export default new TypeParameterController();
