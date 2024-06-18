import { format } from "date-fns"

import prismadb from "@/lib/prismadb"

import { BillboardClient } from "./components/client"
import { BillboardColum } from "./components/columns"

const CategoriesPage = async ({
    params
}: {
    params: { storeId: string }
}) => {
    const categories = await prismadb.category.findMany({
        where: {
            storeId: params.storeId
        },
        include: {
            Billboard: true,
        },
        orderBy: {
            createdAt: 'desc'
        }
    })

    const formattedCategories: BillboardColum[] = categories.map((item) => ({
        id: item.id,
        name: item.name,
        billboardLabel: item.billboard.label,
        createdAt: format(item.createdAt, "MMMM do, YYYY")
    }))

    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <BillboardClient data={formattedCategories} />
            </div>
        </div>
    )
}

export default CategoriesPage