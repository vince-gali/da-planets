import { dbContext } from "../db/DbContext.js";

class PlanetsService{
    
    // NOTE in postman create a planet by adding the galaxy id to the body data
    async createPlanet(planetData) {
        const newPlanet = await dbContext.Planets.create(planetData)
        return newPlanet
    }

    async getPlanets(query) {
        const planets = await dbContext.Planets.find(query).populate('galaxy')
        return planets
    }
    
}

export const planetsService = new PlanetsService()