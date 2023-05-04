import { Request, Response } from "express";
import { detail } from "../../services/consult";

export default async (request: Request, response: Response) => {
  const { id } = request.params;

  const consult = await detail(id);

  if (!consult) {
    return response.status(404).json({
      code: 404,
      message: "Consult not found",
    });
  }

  return response.json(consult);
};
