export function GetLucroBruto() {
    let lucroBruto = Number(localStorage.getItem("lucroBruto")).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })
    
    return lucroBruto
}