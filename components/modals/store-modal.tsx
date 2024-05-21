"use client";

import * as z from "zod"

import { useStoreModel } from "@/hooks/use-store-modal";
import { Modal } from "@/components/ui/modal";

const formSchema = z.object({
    name: z.string().min(1)
})

export const StoreModal = () => {
    const storeModal = useStoreModel;

    return (
        <Modal
            title="Create store"
            description="Add a new store to manage products and categories"
            isOpen={storeModal.isOpen}
            onClose={storeModal.onClose}
        >
            Future Creare Store Form
        </Modal >
    )
}