"use client"

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

import { BillboardColum } from "./columns"
import { Copy, Edit, MoreHorizontal, Trash } from "lucide-react"
import toast from "react-hot-toast"

interface CellActionProps {
    data: BillboardColum
}

export const CellAction: React.FC<CellActionProps> = ({
    data
}) => {
    const onCopy = (id: string) => {
        navigator.clipboard.writeText(id)
        toast.success("Api route copied to the clipboard")
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Button variant="ghost" className="h-8 w-8 p-0">
                    <span className="sr-only">Open Menu</span>
                    <MoreHorizontal className="h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>
                    Actions
                </DropdownMenuLabel>
                <DropdownMenuItem onClick={() => onCopy(data)}>
                    <Copy className="mr-2 h-4" w-4 />
                    Copy Id
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Edit className="mr-2 h-4" w-4 />
                    Update
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Trash className="mr-2 h-4" w-4 />
                    Delete
                </DropdownMenuItem>
            </DropdownMenuContent>

        </DropdownMenu >
    )
}