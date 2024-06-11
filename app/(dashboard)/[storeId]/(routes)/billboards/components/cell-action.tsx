"use client"

import { DropdownMenu, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

import { BillboardColum } from "./columns"

interface CellActionProps {
    data: BillboardColum
}

export const CellAction: React.FC<CellActionProps> = ({
    data
}) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Button>
                    <span className="sr-only">Open Menu</span>
                </Button>
            </DropdownMenuTrigger>
        </DropdownMenu>
    )
}