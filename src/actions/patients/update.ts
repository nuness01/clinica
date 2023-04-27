import { Request, Response } from "express";
import { update, detail } from "../../services/patients";

export default async (request: Request, response: Response) => {
  const { id } = request.params;

  if (!(await detail(id))) {
    return response.status(404).json({
      code: 404,
      message: "Patient not found",
    });
  }

  const patient = await update(id, request.body);

  return response.json(patient);
};
