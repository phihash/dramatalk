import Link from "next/link";
import { supabase } from "@/utils/supabase";
import Header from "@/components/Header";
import DramaItem from "@/components/DramaItem";
import { useEffect } from "react";

export default async function Home() {
  const { data: dramas } = await supabase.from("dramas").select();

  if (!dramas) {
    return <p>データがないです</p>;
  }

  return (
    <>
      <Header></Header>
      {dramas.map((drama) => (
        <div key={drama.id}>
          <Link href={`/dramas/${drama.id}`}>
            <DramaItem
              dramaTitle={drama.dramaTitle}
              broadCastingStationName={drama.broadCastingStationName}
            ></DramaItem>
          </Link>
        </div>
      ))}
    </>
  );
}
