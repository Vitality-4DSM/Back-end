import { User } from "../models/User";
import { Request, Response } from "express";

export class UserController {

  // CREATE
  async create(req: Request, res: Response) {
    try {
      const user = await User.create({ ...req.body });

      return res.json(user);
    } catch (e) {
      return res.status(500).json({ error: "Cannot create User" });
    }
  }

  // READ
  async getAll(req: Request, res: Response) {
    try {
      const user = await User.findAll();
      return res.json(user);
    } catch (e) {
      return res.status(500).json({ error: "Cannot get all Users" });
    }
  }

  async getById(req: Request, res: Response) {
    const { id } = req.body;

    try {
      const user = await User.findOne({
        where: { id_usuario: id },
      });
      return res.json(user);
    } catch (e) {
      return res.status(500).json({ error: "User not found" });
    }
  }

  // UPDATE
  async update(req: Request, res: Response) {
    const { id } = req.body;

    try {
      const [updated] = await User.update(req.body, {
        where: { id_usuario: id },
      });

      if (updated) {
        const updatedUser = await User.findOne({
          where: { id_usuario: id },
        });
        return res.json(updatedUser);
      }
      
      throw new Error("User not found");
    } catch (e) {
      return res.status(500).json({ error: e});
    }
  }


  // DELETE
  async delete(req: Request, res: Response) {
    const { id } = req.body;

    try {
      const userToBeDeleted = await User.findOne({
        where: { id_usuario: id },
      });

      if (!userToBeDeleted) {
        return res.status(404).json({ error: "User not found" });
      }
      await userToBeDeleted.destroy();
      return res.sendStatus(204).json({ message: "User deleted" });
    } catch (e) {
      return res.status(500).json({ error: "Cannot delete User" });
    }
  }
}

export default new UserController();
