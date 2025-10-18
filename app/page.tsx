"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";

import ArrowUp from '@/public/up-arrow.png';
import ArrowDown from "@/public/down-arrow.png";
import PlusIcon from "@/public/adicionar.png";
import MinusIcon from "@/public/botao-de-menos.png";

const API_URL = "http://localhost:5159/levantamentos"

export default function Main() {
  const [formActive, setFormActive] = useState<Boolean>(false);
  const [dataLevantamento, setDataLevantamento] = useState<String>("");
  const [quantCarne, setQuantCarne] = useState<Number>(0);
  const [quantFranbacon, setQuantFranbacon] = useState<Number>(0);
  const [quantLinguica, setQuantLinguica] = useState<Number>(0);
  const [quantCarvao, setQuantCarvao] = useState<Number | undefined>(0);
  const [precoDespesaCarvao, setPrecoDespesaCarvao] = useState<Number | undefined>(0);
  const [despesaCarne, setDespesaCarne] = useState<Number | undefined>(0);
  const [precoDespesaCarne, setPrecoDespesaCarne] = useState<Number | undefined>(0);
  const [despesaFranbacon, setDespesaFranbacon] = useState<Number | undefined>(0);
  const [precoDespesaFranbacon, setPrecoDespesaFranbacon] = useState<Number | undefined>(0);
  const [despesaLinguica, setDespesaLinguica] = useState<Number | undefined>(0);
  const [precoDespesaLinguica, setPrecoDespesaLinguica] = useState<Number | undefined>(0);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    
    console.log("DADOS");

    let dados = {
      "data_levantamento": dataLevantamento,
      "carne_vendida": quantCarne,
      "franbacon_vendido": quantFranbacon,
      "linguica_vendida": quantLinguica,
      "despesa_carvao": quantCarvao,
      "preco_despesa_carvao": precoDespesaCarvao,
      "despesa_carne": despesaCarne,
      "preco_despesa_carne": precoDespesaCarne,
      "despesa_franbacon": despesaFranbacon,
      "preco_despesa_franbacon": precoDespesaFranbacon,
      "despesa_linguica": despesaLinguica,
      "preco_despesa_linguica": precoDespesaLinguica
    };

    console.table(dados);
  }

  return (
    <div className="w-full h-screen p-8">
      <form
        className={`w-full h-auto p-8 flex flex-col gap-4 bg-[#f9f9f9] rounded ${formActive ? "translate-0" : "translate-y-9/12"} relative transition-all duration-300`}
        onSubmit={handleSubmit}
      >
        {!formActive ? (
          <Image className="absolute -top-6 left-6/12 cursor-pointer" src={ArrowUp.src} alt="ícone de subir" width={48} height={48} onClick={() => setFormActive((prevState) => !prevState)}
          />

        ) : <Image className="absolute -top-6 left-6/12 cursor-pointer" src={ArrowDown.src} alt="ícone de descer" width={48} height={48} onClick={() => setFormActive((prevState) => !prevState)} />}

        <div className="w-full mt-8 p-8 flex flex-col justify-end items-end gap-2 border border-l-8 border-[#475660] rounded">
          <label htmlFor="data-levantamento" className="font-bold text-black">Data do Levantamento</label>
          <input
          type="date"
          id="data-levantamento"
          className="w-2/12 p-2 font-bold text-black border rounded cursor-pointer"
          onChange={(e) => setDataLevantamento(e.target.value)}
          />
        </div>

        <div className="w-full p-8 flex flex-wrap justify-evenly gap-y-4 border border-l-8 border-[#475660] rounded">
          <h2 className="w-full text-black font-bold">Espetos Vendidos</h2>
          <div className="flex gap-4 items-center">
            <label className="text-black font-bold">Carne</label>
            <Image className="cursor-pointer" src={MinusIcon.src} alt="ícone de adicionar" width={36} height={36} onClick={() => setQuantCarne((prevState) => Number(prevState) - 1)} />
            <span className="font-bold text-black">{Number(quantCarne)}</span>
            <Image className="cursor-pointer" src={PlusIcon.src} alt="ícone de subtrair" width={30} height={30} onClick={() => setQuantCarne((prevState) => Number(prevState) + 1)} />
          </div>
          <div className="flex gap-4 items-center">
            <label className="text-black font-bold">Franbacon</label>
            <Image className="cursor-pointer" src={MinusIcon.src} alt="ícone de adicionar" width={36} height={36} onClick={() => setQuantFranbacon((prevState) => Number(prevState) - 1)} />
            <span className="font-bold text-black">{Number(quantFranbacon)}</span>
            <Image className="cursor-pointer" src={PlusIcon.src} alt="ícone de subtrair" width={30} height={30} onClick={() => setQuantFranbacon((prevState) => Number(prevState) + 1)} />
          </div>
          <div className="flex gap-4 items-center">
            <label className="text-black font-bold">Linguiça</label>
            <Image className="cursor-pointer" src={MinusIcon.src} alt="ícone de adicionar" width={36} height={36} onClick={() => setQuantLinguica((prevState) => Number(prevState) - 1)} />
            <span className="font-bold text-black">{Number(quantLinguica)}</span>
            <Image className="cursor-pointer" src={PlusIcon.src} alt="ícone de subtrair" width={30} height={30} onClick={() => setQuantLinguica((prevState) => Number(prevState) + 1)} />
          </div>
        </div>

        <div className="w-full p-8 flex flex-col gap-4 border border-l-8 border-[#475660] rounded">
          <h2 className="w-full text-black font-bold">Despesas</h2>
          <div className="flex gap-4 items-center">
            <label className="text-black font-bold" htmlFor="carvao">Carvão</label>
            <Image className="cursor-pointer" src={MinusIcon.src} alt="ícone de adicionar" width={36} height={36} onClick={() => setQuantCarvao((prevState) => Number(prevState) - 1)} />
            <span className="font-bold text-black">{Number(quantCarvao)}</span>
            <Image className="cursor-pointer" src={PlusIcon.src} alt="ícone de subtrair" width={30} height={30} onClick={() => setQuantCarvao((prevState) => Number(prevState) + 1)} />
            <input
              className="w-2/12 p-2 border border-l-4 border-[#475660] rounded text-black outline-none"
              type="text"
              id="carvao"
              onChange={(e) => setPrecoDespesaCarvao(Number(e.target.value))}
              value={Number(precoDespesaCarvao)}
            />
          </div>
          <hr className="border-[#c8c8c8]" />
          <div className="flex flex-wrap justify-start items-center gap-4">
            <h2 className="w-full text-black font-bold">Espetos</h2>
            <div className="flex gap-4 items-center">
              <label className="text-black font-bold" htmlFor="carvao">Carne</label>
              <Image className="cursor-pointer" src={MinusIcon.src} alt="ícone de adicionar" width={36} height={36} onClick={() => setDespesaCarne((prevState) => Number(prevState) - 1)} />
              <span className="font-bold text-black">{Number(despesaCarne)}</span>
              <Image className="cursor-pointer" src={PlusIcon.src} alt="ícone de subtrair" width={30} height={30} onClick={() => setDespesaCarne((prevState) => Number(prevState) + 1)} />
              <input
                className="w-6/12 p-2 border border-l-4 border-[#475660] rounded text-black outline-none"
                type="text"
                id="carvao"
                onChange={(e) => setPrecoDespesaCarne(Number(e.target.value))}
                value={Number(precoDespesaCarne)}
              />
            </div>
            <div className="flex gap-4 items-center">
              <label className="text-black font-bold" htmlFor="carvao">Franbacon</label>
              <Image className="cursor-pointer" src={MinusIcon.src} alt="ícone de adicionar" width={36} height={36} onClick={() => setDespesaFranbacon((prevState) => Number(prevState) - 1)} />
              <span className="font-bold text-black">{Number(despesaFranbacon)}</span>
              <Image className="cursor-pointer" src={PlusIcon.src} alt="ícone de subtrair" width={30} height={30} onClick={() => setDespesaFranbacon((prevState) => Number(prevState) + 1)} />
              <input
                className="w-6/12 p-2 border border-l-4 border-[#475660] rounded text-black outline-none"
                type="text"
                id="carvao"
                onChange={(e) => setPrecoDespesaFranbacon(Number(e.target.value))}
                value={Number(precoDespesaFranbacon)}
              />
            </div>
            <div className="flex gap-4 items-center">
              <label className="text-black font-bold" htmlFor="carvao">Linguiça</label>
              <Image className="cursor-pointer" src={MinusIcon.src} alt="ícone de adicionar" width={36} height={36} onClick={() => setDespesaLinguica((prevState) => Number(prevState) - 1)} />
              <span className="font-bold text-black">{Number(despesaLinguica)}</span>
              <Image className="cursor-pointer" src={PlusIcon.src} alt="ícone de subtrair" width={30} height={30} onClick={() => setDespesaLinguica((prevState) => Number(prevState) + 1)} />
              <input
                className="w-6/12 p-2 border border-l-4 border-[#475660] rounded text-black outline-none"
                type="text"
                id="carvao"
                onChange={(e) => setPrecoDespesaLinguica(Number(e.target.value))}
                value={Number(precoDespesaLinguica)}
              />
            </div>
          </div>
        </div>
        <button className="w-full mb-4 p-4 bg-[#475660] font-bold text-white rounded cursor-pointer">Enviar Levantamento</button>
      </form>
    </div>
  )
}