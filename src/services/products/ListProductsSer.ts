import prismaClient from "../../prisma";

interface ProductRequest
{
    category_id: string
}

class ListProductsSer
{
    async execute({category_id}: ProductRequest)
    {
        const findProduct = await prismaClient.product.findMany({
            where: {
                category_id: category_id
            }
        })

        return findProduct
    }
}

export {ListProductsSer}