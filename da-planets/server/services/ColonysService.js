import { dbContext } from "../db/DbContext.js";

class ColonysService{
    async createColony(colonyData)
    const colonys = await dbContext.Colonys.create(colonyData)
}

export const colonysService = new ColonysService()