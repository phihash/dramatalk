"use client";
import Header from "@/components/Header";
import { getAllDramas } from "@/utils/supabaseFunctions";
import React, { useState } from "react";
import { useEffect } from "react";

export default function Home() {
  const [dramas, setDramas] = useState<any>([]);
  // useEffect(() => {
  //   const getDramas = async () => {
  //     const dramas = await getAllDramas();
  //     setDramas(dramas);
  //     console.log(dramas);
  //   };
  //   getDramas();
  // }, []);
  return (
    <>
      <Header />
      <p>ホーム</p>
    </>
  );
}
