"use client";

import { useState, useEffect } from "react";

export default function Dash() {
  const [lucroBruto, setLucroBruto] = useState<string>();
  const [despesas, setDespesas] = useState<string>();

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

  }, [])
  return (
    <div className="w-full absolute inset-0">
      <div className="w-full p-8 flex justify-evenly">
        <div className="6/12 flex flex-col justify-start">
          <h2 className="text-2xl">Lucro Bruto</h2>
          <span className="text-6xl">
           {lucroBruto}
          </span>
        </div>

        <div className="6/12 flex flex-col justify-end">
          <h2 className="text-2xl">Despesas</h2>
          <span className="text-6xl">
            {despesas}
          </span>
        </div>
      </div>

      <div className="w-full p-8 flex items-center">
        <div className="6/12 flex flex-col">
          <h2 className="text-xl">Espeto mais vendido</h2>
          <h4>{""}</h4>
          <span className="text-6xl">
            {""}
          </span>
        </div>
        <div className="6/12 flex flex-col">
          <h2 className="text-xl">Espeto mais vendido</h2>
          <h4>{""}</h4>
          <span className="text-6xl">
            {""}
          </span>
        </div>
      </div>
    </div>
  );
}
