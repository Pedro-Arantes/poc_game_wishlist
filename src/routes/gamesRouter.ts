import { Router } from "express";
import { getGames, postGames } from "../controllers/gamesController.js";
import { validateSchema } from "../middlewares/validateSchemaMiddleware.js";
import { gameSchema } from "../models/insertGameModel.js";

const gamesRouter : Router = Router();

gamesRouter.post("/games",validateSchema(gameSchema),postGames)
gamesRouter.get("/games",getGames)

export default gamesRouter;