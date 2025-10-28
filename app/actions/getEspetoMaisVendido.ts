export function GetEspetoMaisVendido() {
    if (typeof window === "undefined") return null;
    
    const espetoMaisVendido = localStorage.getItem("espetoMaisVendido");

    return espetoMaisVendido;
}