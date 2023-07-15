import Link from "next/link";
import { supabase } from "@/utils/supabase";

export default async function Home() {
  const { data: dramas } = await supabase.from("dramas").select();

  if (!dramas) {
    return <p>No posts found.</p>;
  }

  return dramas.map((post) => (
    <p key={post.id}>
      <Link href={`/static/${post.id}`}>{post.dramaTitle}</Link>
    </p>
  ));
}
