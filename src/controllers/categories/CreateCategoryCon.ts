import { Request, Response } from "express";
import { CreateCategorySer } from "../../services/categories/CreateCategorySer";

class CreateCategoryCon
{
    async handle(req: Request, res: Response)
    {
        const {name} = req.body
        const createCategorySer = new CreateCategorySer()
        const category = await createCategorySer.execute({name})

        res.json(category)
        return
    }
}

export {CreateCategoryCon}