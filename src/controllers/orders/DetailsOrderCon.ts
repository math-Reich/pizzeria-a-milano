import { Request, Response } from "express";
import { DetailOrderSer } from "../../services/orders/DetailsOrderSer";

class DetailOrderCon
{
    async handle(req: Request, res: Response)
    {
        const order_id = req.query.order_id as string

        const detailOrder = new DetailOrderSer()

        const order = await detailOrder.execute({order_id})

        res.json(order)
        return
    }
}

export {DetailOrderCon}