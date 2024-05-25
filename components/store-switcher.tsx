import { PopoverTrigger } from "./ui/popover"


type PopoverTriggerProps = React.ComponentPropsWithRef<typeof PopoverTrigger>

interface StoreSwitcherProps extends PopoverTriggerProps { }

export default function StoreSwitcher() {
    return (
        <div>
            Store Switcher
        </div>
    )
}