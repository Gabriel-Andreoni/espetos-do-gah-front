export function GetLucroBruto() {
    if (typeof window === "undefined") return null;
    
    const lucroBruto = Number(localStorage.getItem("lucroBruto")).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })
    
    return lucroBruto
}