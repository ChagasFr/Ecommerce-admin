import prismadb from "@/lib/prismadb"

import { BillboardForm } from "./components/billboard-form"

const CategoryPage = async ({
    params

}: {
    params: { caregoryId: string }
}) => {
    const category = await prismadb.category.findUnique({
        where: {
            id: params.caregoryId
        }
    })

    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <BillboardForm initialData={category} />
            </div>
        </div >
    )
}

export default CategoryPage