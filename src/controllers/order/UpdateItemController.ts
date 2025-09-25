import { Request, Response } from "express";
import { UpdateItemService } from "../../services/order/UpdateItemService";

class UpdateItemController {
    async handle(req : Request, res : Response) {
        const { order_id, product_id, amount } = req.body

        const updateItemService = new UpdateItemService()

        const item = await updateItemService.execute({order_id, product_id, amount})

        return res.json(item)
    }
}

export { UpdateItemController }