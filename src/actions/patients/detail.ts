import { Request, Response } from "express";
import { detail } from "../../services/patients";

export default async (request: Request, response: Response) => {
  const { id } = request.params;

  const patient = await detail(id);

  if (!patient) {
    return response.status(404).json({
      code: 404,
      message: "Patient not found",
    });
  }

  return response.json(patient);
};
