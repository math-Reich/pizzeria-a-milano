import { Response, Request } from "express"
import { ListProductsSer } from "../../services/products/ListProductsSer"

class ListProductsCon
{
    async handle(req: Request, res: Response)
    {
        const category_id = req.query.category_id as string
        const listProducts = new ListProductsSer()

        const products = await listProducts.execute({category_id})

        res.json(products)
        return
    }
}

export {ListProductsCon}