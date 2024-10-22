import { Request, Response } from "express";
import { AddItemSer } from "../../services/itens/AddItemSer";

class AddItemCon
{
    async handle(req: Request, res: Response)
    {
        const {order_id, product_id, amount} = req.body

        const addItem = new AddItemSer()
        const order = await addItem.execute({order_id, product_id, amount})

        res.json(order)
        return
    }
}

export {AddItemCon}