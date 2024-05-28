"use client";

import { Store } from "@prisma/client"

import { useRouter } from "next/router";
import { useParams } from "next/navigation";
import { PopoverTrigger } from "@/components/ui/popover"
import { useStoreModel } from "@/hooks/use-store-modal";

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
    return (
        <div>
            Store Switcher
        </div>
    )
}