import { Request, Response } from "express";
import { RemoveOrderSer } from "../../services/orders/RemoveOrderSer";

class RemoveOrderCon
{
    async handle(req: Request, res: Response)
    {
        const order_id = req.query.order_id as string

        const removeOrder = new RemoveOrderSer()
        const order = await removeOrder.execute({order_id})

        res.json(order)
        return
    }
}

export {RemoveOrderCon}