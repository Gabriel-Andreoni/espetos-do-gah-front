export function GetDespesas() {
    if (typeof window === "undefined") return null;
    
    const despesas = Number(localStorage.getItem("despesas")).toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL"
    });

    return despesas;
}