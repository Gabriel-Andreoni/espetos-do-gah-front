export function GetLucroLiquido() {
    if (typeof window === "undefined") return null;
    
    const lucroBruto = Number(localStorage.getItem("lucroBruto"));
    const despesas = Number(localStorage.getItem("despesas"));

    const lucroLiquido =  (lucroBruto - despesas).toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL"
    });

    return lucroLiquido;
}