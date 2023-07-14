"use client"
import React , {useState} from "react";
import Header from "@/components/Header";
import Category from "@/components/Category";
import { addDrama } from "@/utils/supabaseFunctions";
import BroadcastingStationRadioButton from "@/components/BroadcastingStationRadioButton";
const CreateThread = () => {

    const [dramaTitle ,setDramaTitle] = useState("");
    const [broadCastingStationName,setBroadCastingStationName] = useState("")
    const [category, setCategory] = useState([])

  return (
    <>
      <Header />
      <div className="container mt-8 mx-auto flex">
        <div className="lg:w-2/5 md:w-3/4 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-3/4 mt-10 md:mt-0 relative  mx-auto">
          <div className=" mb-8">
            <h2 className="text-gray-900 text-2xl mb-6 font-bold title-font">
              <label htmlFor="" className="leading-7 text-gray-600">
                ドラマ名
              </label>
            </h2>
            <input className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className=" mb-8">
            <h2 className="text-gray-900 text-2xl mb-6 font-bold title-font">
              <label htmlFor="" className="leading-7 text-gray-600">
                放送局
              </label>
            </h2>

            <BroadcastingStationRadioButton broadcastingStationName="NHK系列"></BroadcastingStationRadioButton>
            <BroadcastingStationRadioButton broadcastingStationName="TBS系列"></BroadcastingStationRadioButton>
            <BroadcastingStationRadioButton broadcastingStationName="日本テレビ系列"></BroadcastingStationRadioButton>
            <BroadcastingStationRadioButton broadcastingStationName="朝日系列"></BroadcastingStationRadioButton>
            <BroadcastingStationRadioButton broadcastingStationName="フジテレビ系列"></BroadcastingStationRadioButton>
            <BroadcastingStationRadioButton broadcastingStationName="ネット"></BroadcastingStationRadioButton>
          </div>
          <div className="mb-8">
            <h2 className="text-gray-900 text-2xl mb-6 font-bold title-font">
              <label htmlFor="" className="leading-7 text-gray-600">
                カテゴリ
              </label>
            </h2>
            {/*  */}

            <div className="w-full flex flex-wrap justify-center gap-4 ">
              <Category categoryName="コメディ" />
              <Category categoryName="恋愛" />
              <Category categoryName="シリアス" />
              <Category categoryName="感動" />
              <Category categoryName="警察" />
              <Category categoryName="医療" />
              <Category categoryName="アクション" />
              <Category categoryName="学園" />
            </div>

            {/*  */}
          </div>
          <button className="text-white bg-blue-600 border-0 py-3 px-6 focus:outline-none hover:bg-blue-500 rounded text-lg font-bold">
            スレッド作成
          </button>
        </div>
      </div>
    </>
  );
};

export default CreateThread;
