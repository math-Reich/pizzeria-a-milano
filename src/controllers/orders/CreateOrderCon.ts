import { Request, Response } from "express";
import { CreateOrderSer } from "../../services/orders/CreateOrderSer";

class CreateOrderCon
{
    async handle(req: Request, res: Response)
    {
        const {table, name} = req.body

        const createOrderSer = new CreateOrderSer()
        const order = await createOrderSer.execute({table, name})

        res.json(order)
        return
    }
}

export {CreateOrderCon}