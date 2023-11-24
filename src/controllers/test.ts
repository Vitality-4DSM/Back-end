import { Test } from "../models/test";
import { Request, Response } from "express";

export class TestController {

  // CREATE
  async create(req: Request, res: Response) {
    try {
      const test = await Test.create({ ...req.body });
      return res.json(test);
    } catch (e) {
      return res.status(500).json({ error: "Cannot create Test" });
    }
  }

  // READ
  async getAll(req: Request, res: Response) {
    try {
      const test = await Test.findAll();
      return res.json(test);
    } catch (e) {
      return res.status(500).json({ error: "Cannot get all Tests" });
    }
  }

  async getById(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const test = await Test.findOne({
        where: { id_test: id },
      });
      return res.json(test);
    } catch (e) {
      return res.status(500).json({ error: "Test not found" });
    }
  }

  // UPDATE
  async update(req: Request, res: Response) {
    const { id } = req.body;

    try {
      const [updated] = await Test.update(req.body, {
        where: { id_test: id },
      });

      if (updated) {
        const updatedTest = await Test.findOne({
          where: { id_test: id },
        });
        return res.json(updatedTest);
      }

      throw new Error("Test not found");
    } catch (e) {
      return res.status(500).json({ error: e });
    }
  }


  // DELETE
  async delete(req: Request, res: Response) {
    const { id } = req.params;
    try {
      await Test.destroy({ where: { id_test: id } });
      return res.json({ message: "Test deletado." });
    } catch (e) {
      return res.status(500).json({ error: "Cannot delete Test" + e });
    }
  }
}

export default new TestController();
