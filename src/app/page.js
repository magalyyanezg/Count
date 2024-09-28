"use client";

import { useState } from "react";
import Contex from "@/context/count";
import CoutView from "@/components/countView2";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <Contex.Provider
      value={{
        count,
        setCount,
      }}
    >
      <CoutView/>
    </Contex.Provider>
  );
}
