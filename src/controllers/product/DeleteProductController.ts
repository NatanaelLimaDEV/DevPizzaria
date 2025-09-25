import { Request, Response } from "express";
import { DeleteProductService } from "../../services/product/DeleteProductService";


class DeleteProductController {
    async handle(req: Request, res: Response) {
        const product_id = req.query.product_id as string
        try {

            const deleteProductService = new DeleteProductService();

            const product = await deleteProductService.execute({ product_id });

            return res.json(product);
        } catch (error: any) {
            return res.status(400).json({ message: error.message })

        }
    }
}

export { DeleteProductController }