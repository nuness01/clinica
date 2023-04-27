import { Request, Response } from "express";
import { detail } from "../../services/medic";

export default async (request: Request, response: Response) => {
  const { id } = request.params;

  const medic = await detail(id);

  if (!medic) {
    return response.status(404).json({
      code: 404,
      message: "Medic not found",
    });
  }

  return response.json(medic);
};
