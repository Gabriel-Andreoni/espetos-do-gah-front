export function GetLucroLiquido() {
    let lucroBruto = Number(localStorage.getItem("lucroBruto"));
    let despesas = Number(localStorage.getItem("despesas"));

    let lucroLiquido =  (lucroBruto - despesas).toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL"
    });

    return lucroLiquido;
}