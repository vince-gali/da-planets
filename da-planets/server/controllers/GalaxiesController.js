import { galaxiesService } from "../services/GalaxiesService.js";
import BaseController from "../utils/BaseController.js";

export class GalaxiesController extends BaseController{
    constructor() {
        super('api/galaxies')
        this.router
        .post('', this.createGalaxy)
        .get('', this.getGalaxies)
        .get('/:id', this.getById)
    }
    
    
    async createGalaxy(req,res,next) {
        try {
            const galaxyData = req.body
            const newGalaxy = await galaxiesService.createGalaxy(galaxyData)
            return res.send(newGalaxy)
        } catch (error) {
            next(error)
        }
    }

    async getGalaxies(req,res,next) {
        try {
            const query = req.query
            const galaxies = await galaxiesService.getGalaxies(query)
            res.send(galaxies)
        } catch (error) {
            next(error)
        }
    }

    async getById(req, res,next) {
        try {
            const galaxyId = req.params.id
            const galaxy = await galaxiesService.getById(galaxyId)
            res.send(galaxy)
        } catch (error) {
            next(error)
        }
    }
}