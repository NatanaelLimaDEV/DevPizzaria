import { Request, Response } from "express";
import { CreateProductService } from "../../services/product/CreateProductService";
import { cloudinary } from "../../config/cloudinary";


class CreateProductController {
    async handle(req: Request, res: Response) {
        const { name, price, description, category_id } = req.body;

        const createProductService = new CreateProductService();

        if (!req.file) {
            throw new Error("Error upload file")
        } else {
            const result = await new Promise<any>((resolve, reject) => {
                const stream = cloudinary.uploader.upload_stream(
                    (error, result) => {
                        if (error) {
                            return reject(error)
                        }

                        resolve(result)
                    }
                )

                stream.end(req.file.buffer)
            })

            const product = await createProductService.execute({
                name,
                price,
                description,
                banner: result.secure_url,
                category_id
            })

            return res.json(product)
        }
    }
}

export { CreateProductController }