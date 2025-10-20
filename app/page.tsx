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
  const [dataLevantamento, setDataLevantamento] = useState<string>("");
  const [quantCarne, setQuantCarne] = useState<number>(0);
  const [quantFranbacon, setQuantFranbacon] = useState<number>(0);
  const [quantLinguica, setQuantLinguica] = useState<number>(0);
  const [quantCarvao, setQuantCarvao] = useState<number | undefined>(0);
  const [precoDespesaCarvao, setPrecoDespesaCarvao] = useState<string>("");
  const [despesaCarne, setDespesaCarne] = useState<Number | undefined>(0);
  const [precoDespesaCarne, setPrecoDespesaCarne] = useState<string>("");
  const [despesaFranbacon, setDespesaFranbacon] = useState<number | undefined>(0);
  const [precoDespesaFranbacon, setPrecoDespesaFranbacon] = useState<string>("");
  const [despesaLinguica, setDespesaLinguica] = useState<number | undefined>(0);
  const [precoDespesaLinguica, setPrecoDespesaLinguica] = useState<string>("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        "dataLevantamento": dataLevantamento,
        "carneVendida": quantCarne,
        "franbaconVendido": quantFranbacon,
        "linguicaVendida": quantLinguica,
        "carvao": quantCarvao,
        "precoCarvao": parseFloat(precoDespesaCarvao),
        "qntCarneDespesa": despesaCarne,
        "precoCarneDespesa": parseFloat(precoDespesaCarne),
        "qntFranbaconDespesa": despesaFranbacon,
        "precoFranbaconDespesa": parseFloat(precoDespesaFranbacon),
        "qntLinguicaDespesa": despesaLinguica,
        "precoLinguicaDespesa": parseFloat(precoDespesaLinguica)

      })
    })
      .then(res => {
        if (res.ok) {
          window.alert("Apontamento enviado com sucesso.");
          console.log(res.status);
        } else {
          window.alert("Não foi possível enviar o apontamento.");
          console.log(res.status);
        }
      })
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
              onChange={(e) => setPrecoDespesaCarvao(e.target.value)}
              value={precoDespesaCarvao}
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
                onChange={(e) => setPrecoDespesaCarne(e.target.value)}
                value={precoDespesaCarne}
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
                onChange={(e) => setPrecoDespesaFranbacon(e.target.value)}
                value={precoDespesaFranbacon}
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
                onChange={(e) => setPrecoDespesaLinguica(e.target.value)}
                value={precoDespesaLinguica}
              />
            </div>
          </div>
        </div>
        <button className="w-full mb-4 p-4 bg-[#475660] font-bold text-white rounded cursor-pointer">Enviar Levantamento</button>
      </form>
    </div>
  )
}