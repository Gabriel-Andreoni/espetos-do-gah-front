"use client";

import { Levantamento } from "@/app/types/Levantamento";
import { useState, useEffect } from "react";

const API_URL = "http://localhost:5077/levantamentos";

export function Levantamentos() {
  const [levantamentos, setLevantamentos] = useState<Levantamento[]>([]);
  const [levantamentoAtivo, setLevantamentoAtivo] = useState<string>("");

  useEffect(() => {
    async function GetLevantamentos() {
      const req = await fetch(API_URL);
      const response = await req.json();
      setLevantamentos(response);
    }

    GetLevantamentos();
  }, []);

  return (
    <aside className="row-span-4 p-6 bg-[#FDFFFC] overflow-y-scroll">
      {levantamentos.map((l) => {
        const active = l.id === levantamentoAtivo;
        return (
          <div
            key={l.id}
            onClick={() =>
              setLevantamentoAtivo(active ? "" : l.id)
            }
            className={`w-full my-8 p-6 bg-[#FDA015] cursor-pointer overflow-hidden transition-all duration-500 ${
              active ? "max-h-[250px]" : "max-h-[60px]"
            }`}
          >
            <div className="font-semibold">{l.dataLevantamento}</div>

            <div
              className={`transition-all duration-500 delay-200 overflow-hidden ${
                active
                  ? "opacity-100 mt-6 max-h-[200px]"
                  : "opacity-0 mt-0 max-h-0"
              }`}
            >
              <div className="flex flex-col gap-4">
                <div className="w-full">
                  Carne Vendida:{" "}
                  <strong>{l.carneVendida} unidades</strong>
                </div>
                <div className="w-full">
                  Franbacon Vendido:{" "}
                  <strong>{l.franbaconVendido} unidades</strong>
                </div>
                <div className="w-full">
                  Linguiça Vendida:{" "}
                  <strong>{l.linguicaVendida} unidades</strong>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </aside>
  );
}
