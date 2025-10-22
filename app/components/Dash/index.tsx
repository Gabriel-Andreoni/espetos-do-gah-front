"use client";

import { useState, useEffect } from "react";

export default function Dash() {
  const [lucroBruto, setLucroBruto] = useState<string>();
  const [despesas, setDespesas] = useState<string>();
  const [lucroLiquido, setLucroLiquido] = useState<string>();
  const [espetoMaisVendido, setEspetoMaisVendido] = useState<{nome: string, quantidade:string}>();

  useEffect(() => {
    const lucroBruto = Number(localStorage.getItem("lucroBruto")).toLocaleString("pt-BR", {
      currency: "BRL",
      style: "currency"
    });

    setLucroBruto(lucroBruto)
    
    const despesas = Number(localStorage.getItem("despesas")).toLocaleString("pt-BR", {
      currency: "BRL",
      style: "currency"
    });

    setDespesas(despesas)

    const lucroLiquido = Number(localStorage.getItem("lucroLiquido")).toLocaleString("pt-BR", {
      currency: "BRL",
      style: "currency"
    })

    setLucroLiquido(lucroLiquido)

    const espetoMaisVendido = localStorage.getItem("espetoMaisVendido");
    if(espetoMaisVendido) setEspetoMaisVendido(JSON.parse(espetoMaisVendido))

  }, [])
  return (
    <div className="w-full flex flex-col gap-4 absolute inset-0">
      <div className="w-full p-8 flex justify-center gap-32">
        <div className="w-fit flex flex-col">
          <h2 className="text-2xl">Lucro Bruto</h2>
          <span className="text-6xl">
           {lucroBruto}
          </span>
        </div>

        <div className="w-fit flex flex-col">
          <h2 className="text-2xl">Despesas</h2>
          <span className="text-6xl">
            {despesas}
          </span>
        </div>
      </div>

      <div className="w-full p-8 flex justify-center items-center gap-32">
        <div className="w-fit flex flex-col">
          <h2 className="text-xl">Lucro Líquido</h2>
          <span className="text-6xl">
            {lucroLiquido}
          </span>
        </div>
        <div className="w-fit flex flex-col">
          <h2 className="text-xl">Espeto mais vendido</h2>
          <h4>{espetoMaisVendido?.nome}</h4>
          <span className="text-6xl">
            {espetoMaisVendido?.quantidade}
          </span>
        </div>
      </div>
    </div>
  );
}
