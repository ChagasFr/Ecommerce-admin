"use client";

import { useStoreModel } from "@/hooks/use-store-modal";
import { Modal } from "../ui/modal";

export const StoreModal = () => {
    const storeModal = useStoreModel;

    <Modal
        title="Create store"
        description="Add a new store to manage products and categories"
    >
        Future Creare Store Form
    </Modal>
}