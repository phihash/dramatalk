import { supabase } from "../utils/supabase";

export const getAllDramas = async () => {
  const dramas = await supabase.from("dramas").select("*");
  return dramas.data;
};
