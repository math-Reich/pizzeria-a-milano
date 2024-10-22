import { Request, Response } from "express";
import { ListCategoriesSer } from "../../services/categories/ListCategoriesSer";

class ListCategoriesCon
{
    async handle(req: Request, res: Response)
    {
        const listCategoriesSer = new ListCategoriesSer()
        const categories = await listCategoriesSer.execute()

        res.json(categories)
        return
    }
}

export {ListCategoriesCon}