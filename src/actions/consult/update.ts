import { Request, Response } from "express";
import { update, detail } from "../../services/consult";

export default async (request: Request, response: Response) => {
  const { id } = request.params;

  if (!(await detail(id))) {
    return response.status(404).json({
      code: 404,
      message: "Consult not found",
    });
  }

  const consult = await update(id, request.body);

  return response.json(consult);
};
