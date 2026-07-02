import { Router } from "express";
import { getStarters } from "../controllers/pokemon.controller";

const router = Router();

router.get("/", getStarters);

export default router;
