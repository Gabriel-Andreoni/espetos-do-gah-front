import { TBox } from "@/app/types/TBox";

export function Box({children}:TBox) {
    return (
        <div className={`col-span-1 bg-red-500`}>
            {children}
        </div>
    )
}