"use client";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";


import { OrderColumn, columns } from "./columns";
import { ApiList } from "@/components/ui/api-list";

interface OrderClientProps {
    data: OrderColumn[]
}

export const OrderClient: React.FC<OrderClientProps> = ({
    data
}) => {
    const router = useRouter
    const params = useParams

    return (
        <>
            <div className="flex items-center justify-between">
                <Heading title={`Orders (${data.length})`} description="Manage orders for your store" />
            </div>
            <Separator />
            <DataTable searchKey="label" columns={columns} data={data} />
            <Heading title="API" description="API calss for orders" />
            <Separator />
            <ApiList entityName="orders" entityIdName="orderId" />
        </>
    )
}