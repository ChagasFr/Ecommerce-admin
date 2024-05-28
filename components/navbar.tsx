import { UserButton, auth } from "@clerk/nextjs"
import { redirect } from "next/navigation";

import { MainNav } from "@/components/main-nav"
import StoreSwitcher from "@/components/store-switcher"
import prismadb from "@/lib/prismadb";

const Navbar = () => {
    const { userId } = auth();

    if (!userId) {
        redirect("/sing-in");
    }

    const stores = await prismadb.store.findMany({
        where: {
            userId,
        },
    });

    return (
        <div className="barder-b">
            <div className="flex h-16 items-center px-4">
                <StoreSwitcher items={stores} />
                <MainNav />
                <div className="ml-auto flex items-center space-x-4">
                    <UserButton afterSignOutUrl="/" />
                </div>
            </div>
        </div>
    )
}

export default Navbar