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

    const lucro = levantamentos?.reduce((total, item) => {
        return (
            total +
            (item.precoVendidoCarne || 0) +
            (item.precoVendidoFranbacon || 0) +
            (item.precoVendidoLinguica || 0)
        );
    }, 0);

    console.log(lucro)

    return (
        <div className="w-full absolute inset-0 bg-red-500">
            <div className="w-full p-8 flex justify-evenly">{lucro}</div>
            <div className="w-full p-8 flex justify-start items-center"></div>
        </div>
    )
}