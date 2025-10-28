import { TBox } from "@/app/types/TBox";

export function Box({children, backgroundColor}:TBox) {
    return (
        <div className={`col-span-1 bg-[${backgroundColor}]`}>
            {children}
        </div>
    )
}