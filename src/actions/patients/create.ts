import { Request, Response } from "express";
import { add } from "../../services/patients";

export default async (request: Request, response: Response) => {
  const { name, age, gender, adress, contact } = request.body;

  const newPatient = await add(name, age, gender, adress, contact);

  return response.json(newPatient);
};
