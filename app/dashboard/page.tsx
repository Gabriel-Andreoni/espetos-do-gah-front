"use client";

import Formulario from "./_components/Formulario";
import { Box } from "./_components/Box";

export default function DashBoard() {
  return (
    <main className="w-full h-screen p-8 grid grid-cols-4 grid-rows-4 gap-8">
      <Box>
        <h1>Lucro Bruto</h1>
      </Box>
      <Box>
        <h1>Lucro Liquido</h1>
      </Box>
      <Box>
        <h1>Despesas</h1>
      </Box>
      <Box>
        <h1>Espeto mais Vendido</h1>
      </Box>

      <Formulario />
    </main>
  );
}
