import { Request, Response } from "express";
import { all } from "../../services/medic";

export default async (_: Request, response: Response) => {
  response.json(await all());
};
