import { Request, Response } from "express";
import { ListOrdersSer } from "../../services/orders/ListOrdersSer";

class ListOrdersCon
{
    async handle(req: Request, res: Response)
    {
        const listOrders = new ListOrdersSer()

        const orders = await listOrders.execute()

        res.json(orders)
        return
    }
}

export {ListOrdersCon}