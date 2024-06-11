"use client"

import { BillboardColum } from "./columns"

interface CellActionProps {
    data: BillboardColum
}

export const CellAction: React.FC<CellActionProps> = ({
    data
}) => {
    return (
        <div>Action</div>
    )
}