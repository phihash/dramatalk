import { title } from "process";
import { supabase } from "../utils/supabase";

export const getAllDramas = async () => {
  const dramas = await supabase.from("dramas").select("*");
  return dramas.data;
};

export const addDrama = async (dramaTitle : string , broadCastingStationName : string , category : string[]) => {
   await supabase.from("dramas").insert({dramaTitle:dramaTitle,broadCastingStationName:broadCastingStationName,category:category})
}
