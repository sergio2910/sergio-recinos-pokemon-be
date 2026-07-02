import { Request, Response } from "express";
import { getStarterPokemon } from "../services/pokemon.service";

export const getStarters = (_req: Request, res: Response): void => {
  const pokemon = getStarterPokemon();
  res.json({ pokemon });
};
