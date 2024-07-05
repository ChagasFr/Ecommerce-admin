"use client"

import { ColumnDef } from "@tanstack/react-table"
import { CellAction } from "./cell-action"

export type OrderColumn = {
    id: string
    phone: string
    adress: string
    isPaid: boolean
    totalPrice: string
    products: string
    createdAt: string
}

export const columns: ColumnDef<OrderColumn>[] = [
    {
        accessorKey: "products",
        header: "Products",
    },

    {
        accessorKey: "phone",
        header: "Phone",
    },

    {
        accessorKey: "adress",
        header: "Adress",
    },

    {
        accessorKey: "totalPrice",
        header: "Total Price",
    },

    {
        accessorKey: "isPaid",
        header: "Paid",
    },

    {
        accessorKey: "createAt",
        header: "Date",
    },

    {
        id: "actions",
        cell: ({ row }) => <CellAction data={row.original} />
    }
]