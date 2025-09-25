import prismaClient from "../../prisma";

interface OrderRequest {
    order_id: string;
    product_id: string;
    amount: number;
}

class UpdateItemService {
    async execute({ order_id, product_id, amount }: OrderRequest){
        const order = await prismaClient.item.updateMany({
            where: {
                order_id: order_id,
                product_id: product_id
            },
            data: {
                amount: amount
            }
        })

        return order
    }
}

export { UpdateItemService }