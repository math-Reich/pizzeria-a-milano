import { Request, Response } from "express";
import { CreateProductSer } from "../../services/products/CreateProductSer";

class CreateProductCon
{
    async handle(req: Request, res: Response)
    {
        const {name, price, description, category_id} = req.body

        const createProductSer = new CreateProductSer()

        if(!req.body)
        {
            throw new Error("Is only able to upload one file")
        }

        const {originalname, filename: banner} = req.file

        const product = await createProductSer.execute({
            name,
            price,
            description,
            banner,
            category_id
        })

        res.json(product)
        return
    }
}

export {CreateProductCon}