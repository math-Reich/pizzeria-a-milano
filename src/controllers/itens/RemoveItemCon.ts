import { Request, Response } from "express";
import { RemoveItemSer } from "../../services/itens/RemoveItemSer";

class RemoveItemCon
{
    async handle(req: Request, res: Response)
    {
        const item_id = req.query.item_id as string

        const removeItem = new RemoveItemSer()

        const order = await removeItem.execute({item_id})

        res.json(order)
        return
    }
}

export {RemoveItemCon}