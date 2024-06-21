"use client"

import { ColumnDef } from "@tanstack/react-table"
import { CellAction } from "./cell-action"

export type BillboardColum = {
    id: string
    label: string
    createdAt: string
}

export const columns: ColumnDef<BillboardColum>[] = [
    {
        accessorKey: "label",
        header: "Label",
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