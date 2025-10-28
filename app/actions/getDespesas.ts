export function GetDespesas() {
    const despesas = Number(localStorage.getItem("despesas")).toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL"
    });

    return despesas;
}