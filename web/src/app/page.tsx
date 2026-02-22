"use client";
import { DietData } from "@/types/diet-data.type";
import { DietForm } from "./_components/diet_form";
import { useState } from "react";
import { DietGenerator } from "./_components/diet-generator";

export default function Home() {
  const [data, setData] = useState<DietData | null>(null);
  function handleSubmit(userInfo: DietData) {
    setData(userInfo);
  }
  return (
    <>{!data ? <DietForm onSubmit={handleSubmit} /> : <DietGenerator data={data} />}</>
  );
}
