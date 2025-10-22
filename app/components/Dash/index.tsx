"use client";

import { Levantamento } from "@/app/types/Levantamento";
import { useEffect, useState } from "react";

const API_URL = "http://localhost:5077/levantamentos";

export default function Dash() {
  const [levantamentos, setLevantamentos] = useState<Levantamento[]>();

  useEffect(() => {
    async function GetLevantamentos() {
      const request = await fetch(API_URL);
      const data = await request.json();
      setLevantamentos(data);
    }

    GetLevantamentos();
  }, []);

  const data = new Date();
  const dataAtual = `${data.getFullYear()}-${data.getMonth() + 1}-${data.getDate()}`
  
  const levantamentoFiltrado = levantamentos?.filter((f) => f.dataLevantamento == String(dataAtual));
  console.log(levantamentoFiltrado)

  const lucro = levantamentoFiltrado?.reduce((total, item) => {
    return (
      total +
      (item.precoVendidoCarne || 0) +
      (item.precoVendidoFranbacon || 0) +
      (item.precoVendidoLinguica || 0)
    );
  }, 0);

  const despesas = levantamentoFiltrado?.reduce((total, item) => {
    return (
        total +
        (item.precoCarneDespesa || 0) +
        (item.precoFranbaconDespesa || 0) +
        (item.precoLinguicaDespesa || 0)
    );
  }, 0)

  return (
    <div className="w-full absolute inset-0">
      <div className="w-full p-8 flex justify-evenly">
        <div className="6/12 flex flex-col justify-start">
          <h2 className="text-2xl">Lucro Bruto</h2>
          <span className="text-6xl">{lucro?.toLocaleString("pt-br", {currency: "BRL", style: "currency"})}</span>
        </div>

        <div className="6/12 flex flex-col justify-end">
          <h2 className="text-2xl">Despesas</h2>
          <span className="text-6xl">{despesas?.toLocaleString("pt-br", {currency: "BRL", style: "currency"})}</span>
        </div>
      </div>
      <div className="w-full p-8 flex justify-start items-center"></div>
    </div>
  );
}
