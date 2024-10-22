import prismaClient from "../../prisma";

interface RemoveOrderResquest
{
    order_id: string
}

class RemoveOrderSer
{
    async execute({order_id}: RemoveOrderResquest)
    {
        const order = await prismaClient.order.delete({where: {id: order_id}})

        return order
    }
}

export {RemoveOrderSer}