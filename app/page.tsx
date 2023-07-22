import Link from "next/link";
import { supabase } from "@/utils/supabase";
import Header from "@/components/Header";
import DramaItem from "@/components/DramaItem";

export default async function Home() {
  let dramas;
  try {
    const { data } = await supabase.from("dramas").select();
    dramas = data;
  } catch (error) {
    console.error("Failed to fetch dramas: ", error);
    return <p>データの取得に失敗しました</p>;
  }

  if (!dramas) {
    return <p>データがないです</p>;
  }

  if (dramas) {
    console.log(dramas);
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
