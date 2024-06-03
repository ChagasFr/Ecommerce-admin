import prismadb from "@/lib/prismadb"

const BillboardPage = async ({
    params

}: {
    params: { billboardId: string }
}) => {
    const billboard = await prismadb.billboard.findUnique({
        where: {
            id: params.billboardId
        }
    })

    return (
        <div>
            This is a form for billboards
        </div >
    )
}

export default BillboardPage