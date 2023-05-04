import { Request, Response } from "express";
import { add } from "../../services/consult";

export default async (request: Request, response: Response) => {
  const { room, desc, medicId, patientId } = request.body;

  const newConsult = await add(room, desc, medicId, patientId);

  return response.json(newConsult);
};
