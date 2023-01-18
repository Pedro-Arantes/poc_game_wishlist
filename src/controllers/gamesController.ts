import { Request,Response } from "express";
import { GameInsert } from "../protocols/Game.js";
import { insertGames, selectGames } from "../repository/gamesRepository.js";

export async function getGames(req:Request,res:Response){


    try {

        const result = await selectGames()
        res.status(200).send(result.rows)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}

export async function postGames(req:Request,res:Response){

    const game : GameInsert = req.body
    try {

        const result = await insertGames(game)
        res.status(201).send("Game Inserted")
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}