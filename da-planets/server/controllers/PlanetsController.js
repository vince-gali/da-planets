import { planetsService } from "../services/PlanetsService.js"
import BaseController from "../utils/BaseController.js"

export class PlanetsController extends BaseController{
    constructor(){
        super('api/planets')
        this.router
            .post('', this.createPlanet)
            .get('', this.getPlanets)
    }
    
    async createPlanet(req,res,next) {
        try {
            const planetData = req.body
            const newPlanet = await planetsService.createPlanet(planetData)
            return res.send(newPlanet)
        } catch (error) {
            
        }
    }

    async getPlanets(req,res,next) {
        try {
            const query = req.query
            const planets = await planetsService.getPlanets(query)
            return res.send(planets)
        } catch (error) {
            next(error)
            
        }
    }
}