import { Request, Response } from "express";
import { SendOrderSer } from "../../services/orders/SendOrderSer";

class SendOrderCon
{
    async handle(req: Request, res: Response)
    {
        const {order_id} = req.body

        const sendOrder = new SendOrderSer()

        const order = await sendOrder.execute({order_id})

        res.json(order)
        return
    }
}

export {SendOrderCon}