import { Usuario } from "../models/usuario";
import { Request, Response } from "express";

export class UsuarioController {

  // CREATE
  async create(req: Request, res: Response) {
    try {
      const user = await Usuario.create({ ...req.body });

      return res.json(user);
    } catch (e) {
      return res.status(500).json({ error: "Cannot create Usuario" });
    }
  }

  // READ
  async getAll(req: Request, res: Response) {
    try {
      const user = await Usuario.findAll();
      return res.json(user);
    } catch (e) {
      return res.status(500).json({ error: "Cannot get all Users" });
    }
  }

  async getById(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const user = await Usuario.findOne({
        where: { id_usuario: id },
      });
      return res.json(user);
    } catch (e) {
      return res.status(500).json({ error: "Usuario not found" });
    }
  }

  // UPDATE
  async update(req: Request, res: Response) {
    const { id } = req.body;

    try {
      const [updated] = await Usuario.update(req.body, {
        where: { id_usuario: id },
      });

      if (updated) {
        const updatedUser = await Usuario.findOne({
          where: { id_usuario: id },
        });
        return res.json(updatedUser);
      }

      throw new Error("Usuario not found");
    } catch (e) {
      return res.status(500).json({ error: e });
    }
  }


  // DELETE
  async delete(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const userToBeDeleted = await Usuario.findOne({
        where: { id_usuario: id },
      });

      if (!userToBeDeleted) {
        return res.status(404).json({ error: "Usuario not found" });
      }
      await userToBeDeleted.destroy();
      return res.sendStatus(204);
    } catch (e) {
      return res.status(500).json({ error: "Cannot delete Usuario" });
    }
  }
}

export default new UsuarioController();
