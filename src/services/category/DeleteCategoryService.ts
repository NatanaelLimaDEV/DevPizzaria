import prismaClient from "../../prisma"

interface ProductRequest {
    category_id: string;
}

class DeleteCategoryService {
    async execute({ category_id }: ProductRequest) {

        const category = await prismaClient.category.delete({
            where: {
                id: category_id
            }
       })

        return category
    }
}

export { DeleteCategoryService }