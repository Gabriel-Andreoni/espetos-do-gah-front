export function GetEspetoMaisVendido() {
    let espetoMaisVendido = localStorage.getItem("espetoMaisVendido");

    return espetoMaisVendido;
}