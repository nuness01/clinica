import express from "express";
import { list, detail} from "../actions/specialty";

const router = express.Router();

router.get("", list);
router.get("/:id", detail);


export default router;
