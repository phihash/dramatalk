import Link from "next/link";
import { supabase } from "@/utils/supabase";
import Header from "@/components/Header";
import DramaItem from "@/components/DramaItem";

export default async function Home() {
  const { data: dramas } = await supabase.from("dramas").select();

  if (!dramas) {
    return <p>No posts found.</p>;
  }

  return (
    <>
      <Header></Header>
      {dramas.map((post) => (
        <p key={post.id}>
          <Link href={`/static/${post.id}`}>{post.dramaTitle}</Link>
        </p>
      ))}
    </>
  );
}
