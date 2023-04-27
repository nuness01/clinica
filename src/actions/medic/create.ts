import { Request, Response } from "express";
import { add } from "../../services/medic";

export default async (request: Request, response: Response) => {
  const { name, specialty } = request.body;

  const newMedic = await add(name, specialty);

  return response.json(newMedic);
};
