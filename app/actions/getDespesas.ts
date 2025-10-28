export function GetDespesas() {
    let despesas = Number(localStorage.getItem("despesas")).toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL"
    });

    return despesas;
}