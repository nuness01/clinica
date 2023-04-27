import express, { Request, Response } from "express";
import authRoutes from "./auth";
import patientsRoutes from "./patients";
import medicsRoutes from "./medic";
import { name, version } from "../../package.json";

const router = express.Router();

router.get("/", (req: Request, res: Response) =>
  res.json({
    name,
    version,
  })
);

router.use("/auth", authRoutes);
router.use("/patients", patientsRoutes);
router.use("/medics", medicsRoutes);

export default router;
