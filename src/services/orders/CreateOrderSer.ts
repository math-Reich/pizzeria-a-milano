import prismaClient from "../../prisma";

interface OrderRequest
{
    table: number
    name: string
}

class CreateOrderSer
{
    async execute({table, name}: OrderRequest)
    {
        const order = await prismaClient.order.create({
            data: {
                table: table,
                name: name
            }
        })

        return order
    }
}

export {CreateOrderSer}