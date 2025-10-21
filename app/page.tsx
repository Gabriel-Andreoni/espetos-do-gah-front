"use client";

import Dash from "./components/Dash";
import Formulario from "./components/Formulario";

export default function Main() {
  return (
    <main className="w-full h-auto relative overflow-hidden">
      <Formulario />
      <Dash/>
    </main>
  )
}