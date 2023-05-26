import { colonysService } from "../services/ColonysService.js"
import BaseController from "../utils/BaseController.js"

export class ColonysController extends BaseController{
    constructor(){
        super('api/colonys')
        this.router
        .post('', this.createColony)
    }
    async createColony(req, res, next) {
        try {
            const colonyData = req.body
            const newColony = await colonysService.createColony(colonyData)
            return res.send(newColony)
        } catch (error) {
            
        }
    }
}