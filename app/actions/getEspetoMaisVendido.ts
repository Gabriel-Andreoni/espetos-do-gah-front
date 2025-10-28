export function GetEspetoMaisVendido() {
    const espetoMaisVendido = localStorage.getItem("espetoMaisVendido");

    return espetoMaisVendido;
}