"use client";

import { Store } from "@prisma/client"
import { useParams, useRouter } from "next/navigation";

import { Popover, PopoverTrigger } from "@/components/ui/popover"
import { useStoreModel } from "@/hooks/use-store-modal";
import { useState } from "react";

type PopoverTriggerProps = React.ComponentPropsWithRef<typeof PopoverTrigger>

interface StoreSwitcherProps extends PopoverTriggerProps {
    items: Store[]
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

    const currentStore = formattedItems.find((item) => item.value === params.storeId);

    const [open, setOpen] = useState(false)

    const onStoreSelect = (store: { value: string, label: string }) => {
        setOpen(false);
        router.push(`/${store.value}`)
    }

    return (
        <div>
            Store Switcher
        </div>
    )
}