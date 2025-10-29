"use client";

import Formulario from "./_components/Formulario";
import { Box } from "./_components/Box";
import { GetLucroBruto } from "../actions/getLucroBruto";
import { GetLucroLiquido } from "../actions/getLucroLiquido";
import { GetDespesas } from "../actions/getDespesas";
import { GetEspetoMaisVendido } from "../actions/getEspetoMaisVendido";
import { Levantamentos } from "./_components/Levantamentos";

export default function DashBoard() {
  const lucroBruto = GetLucroBruto();
  const lucroLiquido = GetLucroLiquido();
  const despesas = GetDespesas();
  const espetoMaisVendidoRaw = GetEspetoMaisVendido(); 
  let espetoMaisVendido;
  if(espetoMaisVendidoRaw) espetoMaisVendido = JSON.parse(espetoMaisVendidoRaw);
  
  return (
    <main className="w-full h-screen p-8 grid grid-cols-4 grid-rows-4 gap-8">
      <Box backgroundColor="bg-[#1A4264]">
        <h2 className="text-sm text-[#FDFFFC]">Lucro Bruto</h2>
        <span className="text-5xl text-[#FDFFFC] font-bold">{lucroBruto}</span>
      </Box>
      <Box backgroundColor="bg-[#FDA015]">
        <h2 className="text-sm text-[#FDFFFC]">Lucro Líquido</h2>
        <span className="text-5xl text-[#FDFFFC] font-bold">{lucroLiquido}</span>
      </Box>
      <Box backgroundColor="bg-[#FDFFFC]">
        <h2 className="text-sm text-[#1A4264]">Despesas</h2>
        <span className="text-5xl text-[#1A4264] font-bold">{despesas}</span>
      </Box>
      <Box backgroundColor="bg-[#FDFFFC]">
        <h2 className="text-sm text-[#1A4264]">Espeto Mais Vendido</h2>
        <span className="text-5xl text-[#1A4264] font-bold">{espetoMaisVendido?.nome}</span>
      </Box>

      <Formulario />
      <Levantamentos />
    </main>
  );
}
