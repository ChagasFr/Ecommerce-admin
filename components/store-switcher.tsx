"use client";

import { Store } from "@prisma/client"

import { PopoverTrigger } from "@/components/ui/popover"
import { useParams } from "next/navigation";
import { useRouter } from "next/router";

type PopoverTriggerProps = React.ComponentPropsWithRef<typeof PopoverTrigger>

interface StoreSwitcherProps extends PopoverTriggerProps {
    item: Store[]
}

export default function StoreSwitcher({
    className,
    items = []
}: StoreSwitcherProps) {
    const storeModal = useStoreModel();
    const params = useParams();
    const router = useRouter();

    const formattedItems = items.map((item) => ({
        label: item.name,
        value: item.id
    }))
    return (
        <div>
            Store Switcher
        </div>
    )
}