import { FormEvent, useState } from "react";
import Image from "next/image";

import PlusIcon from "@/public/adicionar.png";
import MinusIcon from "@/public/botao-de-menos.png";

const API_URL = "http://localhost:5077/levantamentos";

export default function Formulario() {
  const [dataLevantamento, setDataLevantamento] = useState<string>("");
  const [quantCarne, setQuantCarne] = useState<number>(0);
  const [precoVendidoCarne, setPrecoVendidoCarne] = useState<number>(0);
  const [quantFranbacon, setQuantFranbacon] = useState<number>(0);
  const [precoVendidoFranBacon, setPrecoVendidoFrabacon] = useState<number>(0);
  const [quantLinguica, setQuantLinguica] = useState<number>(0);
  const [precoVendidoLinguica, setPrecoVendidoLinguica] = useState<number>(0);
  const [quantCarvao, setQuantCarvao] = useState<number>(0);
  const [precoDespesaCarvao, setPrecoDespesaCarvao] = useState<number>(0);
  const [despesaCarne, setDespesaCarne] = useState<number>(0);
  const [precoDespesaCarne, setPrecoDespesaCarne] = useState<number>(0);
  const [despesaFranbacon, setDespesaFranbacon] = useState<number>(0);
  const [precoDespesaFranbacon, setPrecoDespesaFranbacon] = useState<number>(0);
  const [despesaLinguica, setDespesaLinguica] = useState<number>(0);
  const [precoDespesaLinguica, setPrecoDespesaLinguica] = useState<number>(0);

  const data = new Date();
  const dataAtual = `${data.getFullYear()}-${
    data.getMonth() + 1
  }-${data.getDate()}`;

  function setLocalStorageValues() {
    if (dataLevantamento == dataAtual) {
      const lucroBruto =
        precoVendidoCarne + precoVendidoFranBacon + precoVendidoLinguica;
      localStorage.setItem("lucroBruto", String(lucroBruto));

      const despesas = [
        precoDespesaCarne,
        precoDespesaFranbacon,
        precoDespesaLinguica,
        precoDespesaCarvao,
      ].reduce((a, b) => a + b, 0);
      localStorage.setItem("despesas", String(despesas));

      const lucroLiquido = lucroBruto - despesas;
      localStorage.setItem("lucroLiquido", String(lucroLiquido));

      const espetoMaisVendido = [
        { nome: "Carne", quantidade: quantCarne },
        { nome: "Franbacon", quantidade: quantFranbacon },
        { nome: "Linguiça", quantidade: quantLinguica },
      ].reduce((a, b) => (a.quantidade > b.quantidade ? a : b));
      localStorage.setItem(
        "espetoMaisVendido",
        JSON.stringify(espetoMaisVendido)
      );
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLocalStorageValues();

    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        dataLevantamento: dataLevantamento,
        carneVendida: quantCarne,
        precoVendidoCarne: precoVendidoCarne,
        franbaconVendido: quantFranbacon,
        precoVendidoFranbacon: precoVendidoFranBacon,
        linguicaVendida: quantLinguica,
        precoVendidoLinguica: precoVendidoLinguica,
        carvao: quantCarvao,
        precoCarvao: precoDespesaCarvao,
        qntCarneDespesa: despesaCarne,
        precoCarneDespesa: precoDespesaCarne,
        qntFranbaconDespesa: despesaFranbacon,
        precoFranbaconDespesa: precoDespesaFranbacon,
        qntLinguicaDespesa: despesaLinguica,
        precoLinguicaDespesa: precoDespesaLinguica,
      }),
    }).then((res) => {
      if (res.ok) {
        window.alert("Apontamento enviado com sucesso.");
        console.log(res.status);
      } else {
        window.alert("Não foi possível enviar o apontamento.");
        console.log(res.status);
      }
    });
  }

  return (
    <div className={`w-full h-auto col-span-3 row-span-4`}>
      <form
        className="w-full h-auto px-8 flex flex-col gap-4 bg-[#f9f9f9]"
        onSubmit={handleSubmit}
      >
        <div className="w-full mt-8 p-6 flex flex-col justify-end items-end gap-2 border border-l-8 border-[#475660] rounded">
          <label htmlFor="data-levantamento" className="font-bold text-black">
            Data do Levantamento
          </label>
          <input
            type="date"
            id="data-levantamento"
            className="w-2/12 p-2 font-bold text-black border rounded cursor-pointer"
            onChange={(e) => setDataLevantamento(e.target.value)}
          />
        </div>

        <div className="w-full p-6 flex flex-wrap justify-evenly gap-y-4 border border-l-8 border-[#475660] rounded">
          <h2 className="w-full text-black font-bold">Espetos Vendidos</h2>
          <div className="flex gap-4 items-center">
            <label className="text-black font-bold">Carne</label>
            <Image
              className="cursor-pointer"
              src={MinusIcon.src}
              alt="ícone de adicionar"
              width={36}
              height={36}
              onClick={() => {
                setQuantCarne((prevState) => prevState - 1);
                setPrecoVendidoCarne((prevState) => prevState - 10);
              }}
            />
            <span className="font-bold text-black">{quantCarne}</span>

            <Image
              className="cursor-pointer"
              src={PlusIcon.src}
              alt="ícone de subtrair"
              width={30}
              height={30}
              onClick={() => {
                setQuantCarne((prevState) => prevState + 1);
                setPrecoVendidoCarne((prevState) => prevState + 10);
              }}
            />
            <span className="text-black font-bold">
              {quantCarne <= 0
                ? null
                : precoVendidoCarne.toLocaleString("pt-BR", {
                    currency: "BRL",
                    style: "currency",
                  })}
            </span>
          </div>
          <div className="flex gap-4 items-center">
            <label className="text-black font-bold">Franbacon</label>
            <Image
              className="cursor-pointer"
              src={MinusIcon.src}
              alt="ícone de adicionar"
              width={36}
              height={36}
              onClick={() => {
                setQuantFranbacon((prevState) => prevState - 1);
                setPrecoVendidoFrabacon((prevState) => prevState - 10);
              }}
            />
            <span className="font-bold text-black">{quantFranbacon}</span>
            <Image
              className="cursor-pointer"
              src={PlusIcon.src}
              alt="ícone de subtrair"
              width={30}
              height={30}
              onClick={() => {
                setQuantFranbacon((prevState) => prevState + 1);
                setPrecoVendidoFrabacon((prevState) => prevState + 10);
              }}
            />

            <span className="text-black font-bold">
              {quantFranbacon <= 0
                ? null
                : precoVendidoFranBacon.toLocaleString("pt-BR", {
                    currency: "BRL",
                    style: "currency",
                  })}
            </span>
          </div>
          <div className="flex gap-4 items-center">
            <label className="text-black font-bold">Linguiça</label>
            <Image
              className="cursor-pointer"
              src={MinusIcon.src}
              alt="ícone de adicionar"
              width={36}
              height={36}
              onClick={() => {
                setQuantLinguica((prevState) => prevState - 1);
                setPrecoVendidoLinguica((prevState) => prevState - 10);
              }}
            />
            <span className="font-bold text-black">{quantLinguica}</span>
            <Image
              className="cursor-pointer"
              src={PlusIcon.src}
              alt="ícone de subtrair"
              width={30}
              height={30}
              onClick={() => {
                setQuantLinguica((prevState) => prevState + 1);
                setPrecoVendidoLinguica((prevState) => prevState + 10);
              }}
            />
            <span className="text-black font-bold">
              {quantLinguica <= 0
                ? null
                : precoVendidoLinguica.toLocaleString("pt-BR", {
                    currency: "BRL",
                    style: "currency",
                  })}
            </span>
          </div>
        </div>

        <div className="w-full p-6 flex flex-col gap-8 border border-l-8 border-[#475660] rounded">
          <h2 className="w-full text-black font-bold">Despesas</h2>
          <div className="flex gap-4 items-center">
            <label className="text-black font-bold" htmlFor="carvao">
              Carvão
            </label>
            <Image
              className="cursor-pointer"
              src={MinusIcon.src}
              alt="ícone de adicionar"
              width={36}
              height={36}
              onClick={() => {
                setQuantCarvao((prevState) => prevState - 1);
                setPrecoDespesaCarvao((prevState) => prevState - 22.5);
              }}
            />
            <span className="font-bold text-black">{quantCarvao}</span>
            <Image
              className="cursor-pointer"
              src={PlusIcon.src}
              alt="ícone de subtrair"
              width={30}
              height={30}
              onClick={() => {
                setQuantCarvao((prevState) => prevState + 1);
                setPrecoDespesaCarvao((prevState) => prevState + 22.5);
              }}
            />
            <span className="text-black font-bold">
              {quantCarvao <= 0
                ? null
                : precoDespesaCarvao.toLocaleString("pt-BR", {
                    currency: "BRL",
                    style: "currency",
                  })}
            </span>
          </div>
          <hr className="border-[#c8c8c8]" />
          <div className="flex flex-wrap justify-evenly items-center gap-4">
            <h2 className="w-full text-black font-bold">Espetos</h2>
            <div className="flex gap-4 items-center">
              <label className="text-black font-bold" htmlFor="carvao">
                Carne
              </label>
              <Image
                className="cursor-pointer"
                src={MinusIcon.src}
                alt="ícone de adicionar"
                width={36}
                height={36}
                onClick={() => {
                  setDespesaCarne((prevState) => prevState - 1);
                  setPrecoDespesaCarne((prevState) => prevState - 35);
                }}
              />
              <span className="font-bold text-black">{despesaCarne}</span>
              <Image
                className="cursor-pointer"
                src={PlusIcon.src}
                alt="ícone de subtrair"
                width={30}
                height={30}
                onClick={() => {
                  setDespesaCarne((prevState) => prevState + 1);
                  setPrecoDespesaCarne((prevState) => prevState + 35);
                }}
              />
              <span className="text-black font-bold">
                {despesaCarne <= 0
                  ? null
                  : precoDespesaCarne.toLocaleString("pt-BR", {
                      currency: "BRL",
                      style: "currency",
                    })}
              </span>
            </div>
            <div className="flex gap-4 items-center">
              <label className="text-black font-bold" htmlFor="carvao">
                Franbacon
              </label>
              <Image
                className="cursor-pointer"
                src={MinusIcon.src}
                alt="ícone de adicionar"
                width={36}
                height={36}
                onClick={() => {
                  setDespesaFranbacon((prevState) => prevState - 1);
                  setPrecoDespesaFranbacon((prevState) => prevState - 35);
                }}
              />
              <span className="font-bold text-black">{despesaFranbacon}</span>
              <Image
                className="cursor-pointer"
                src={PlusIcon.src}
                alt="ícone de subtrair"
                width={30}
                height={30}
                onClick={() => {
                  setDespesaFranbacon((prevState) => prevState + 1);
                  setPrecoDespesaFranbacon((prevState) => prevState + 35);
                }}
              />
              <span className="text-black font-bold">
                {despesaFranbacon <= 0
                  ? null
                  : precoDespesaFranbacon.toLocaleString("pt-BR", {
                      currency: "BRL",
                      style: "currency",
                    })}
              </span>
            </div>
            <div className="flex gap-4 items-center">
              <label className="text-black font-bold" htmlFor="carvao">
                Linguiça
              </label>
              <Image
                className="cursor-pointer"
                src={MinusIcon.src}
                alt="ícone de adicionar"
                width={36}
                height={36}
                onClick={() => {
                  setDespesaLinguica((prevState) => prevState - 1);
                  setPrecoDespesaLinguica((prevState) => prevState - 35);
                }}
              />
              <span className="font-bold text-black">{despesaLinguica}</span>
              <Image
                className="cursor-pointer"
                src={PlusIcon.src}
                alt="ícone de subtrair"
                width={30}
                height={30}
                onClick={() => {
                  setDespesaLinguica((prevState) => prevState + 1);
                  setPrecoDespesaLinguica((prevState) => prevState + 35);
                }}
              />
              <span className="text-black font-bold">
                {despesaLinguica <= 0
                  ? null
                  : precoDespesaLinguica.toLocaleString("pt-BR", {
                      currency: "BRL",
                      style: "currency",
                    })}
              </span>
            </div>
          </div>
        </div>
        <button className="w-full p-4 mb-6 bg-[#475660] font-bold text-white rounded cursor-pointer">
          Enviar Levantamento
        </button>
      </form>
    </div>
  );
}
