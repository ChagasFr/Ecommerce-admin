import { UserButton } from "@clerk/nextjs"

import { MainNav } from "@/components/main-nav"
import StoreSwitcher from "@/components/store-switcher"

const Navbar = () => {
    return (
        <div className="barder-b">
            <div className="flex h-16 items-center px-4">
                <StoreSwitcher />
                <MainNav />
                <div className="ml-auto flex items-center space-x-4">
                    <UserButton afterSignOutUrl="/" />
                </div>
            </div>
        </div>
    )
}

export default Navbar