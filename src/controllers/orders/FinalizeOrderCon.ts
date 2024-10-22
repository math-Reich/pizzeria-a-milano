import { Request, Response } from "express";
import { FinalizeOrderSer } from "../../services/orders/FinalizeOrderSer";

class FinalizeOrderCon
{
    async handle(req: Request, res: Response)
    {
        const {order_id} = req.body

        const finalizeOrder = new FinalizeOrderSer()

        const order = await finalizeOrder.execute({order_id})

        res.json(order)
        return
    }
}

export {FinalizeOrderCon}