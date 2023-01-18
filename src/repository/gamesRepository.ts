import { QueryResult } from "pg";
import { connection } from "../database/db.js";
import { GameEntity, GameInsert } from "../protocols/Game.js";


export async function selectGames():Promise<QueryResult<GameEntity>> {
    return connection.query('SELECT * FROM games ',);
}

export async function insertGames(game : GameInsert):Promise<QueryResult> {
    const {name,platform,genre} = game
    return connection.query('INSERT INTO games(name,platform,genre)  VALUES($1,$2,$3)',[name,platform,genre]);
}