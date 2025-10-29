import { TBox } from "@/app/types/TBox";

export function Box({children, backgroundColor}:TBox) {
    return (
        <div className={`col-span-1 p-4 ${backgroundColor} flex flex-col justify-center-safe gap-4`}>
            {children}
        </div>
    )
}