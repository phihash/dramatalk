"use client";
import React, { useState } from "react";
import { supabase } from "@/utils/supabase";
import Header from "@/components/Header";
import Category from "@/components/Category";
import BroadcastingStationRadioButton from "@/components/BroadcastingStationRadioButton";
const CreateThread = () => {
  const [dramaTitle, setDramaTitle] = useState("");
  const [broadCastingStationName, setBroadCastingStationName] = useState("");
  const [dramaCategories, setDramaCategories] = React.useState<string[]>([]);

  const broadcastingStations = [
    "NHK系列",
    "TBS系列",
    "日本テレビ系列",
    "フジテレビ系列",
    "テレビ朝日系列",
  ];
  const categories = [
    "コメディ",
    "恋愛",
    "シリアス",
    "感動",
    "警察",
    "医療",
    "アクション",
    "学園",
  ];

  const handleDramaTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDramaTitle(e.target.value);
  };

  const createThread = async () => {
    if (
      dramaTitle != "" &&
      broadCastingStationName != "" &&
      dramaCategories.length != 0
    ) {
      const { error } = await supabase.from("dramas").insert({
        dramaTitle: dramaTitle,
        broadCastingStationName: broadCastingStationName,
        dramaCategories: dramaCategories,
      });

      if (error) {
        console.error("Error inserting data:", error);
      }
      console.log("スレッドを生成されました");
      setDramaTitle("");
    } else {
      alert("入力されていない項目があります");
    }
  };

  return (
    <>
      <Header />
      <div className="container mt-8 mx-auto flex">
        <div className="lg:w-3/5 md:w-3/4 bg-white rounded-lg p-8 flex flex-col md:ml-auto mt-10 md:mt-0 relative  mx-auto">
          <div className=" mb-8">
            <h2 className="text-gray-900 text-2xl mb-6 font-bold title-font">
              <label htmlFor="" className="leading-7 text-gray-600">
                ドラマ名
              </label>
            </h2>
            <input
              onChange={handleDramaTitleChange}
              value={dramaTitle}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className=" mb-8">
            <h2 className="text-gray-900 text-2xl mb-6 font-bold title-font">
              <label htmlFor="" className="leading-7 text-gray-600">
                放送局
              </label>
            </h2>
            {broadcastingStations.map((station) => {
              return (
                <BroadcastingStationRadioButton
                  key={station}
                  station={station}
                  setBroadCastingStationName={setBroadCastingStationName}
                />
              );
            })}
          </div>
          <div className="mb-8">
            <h2 className="text-gray-900 text-2xl mb-6 font-bold title-font">
              <label htmlFor="" className="leading-7 text-gray-600">
                カテゴリ
              </label>
            </h2>

            <div className="w-full flex flex-wrap justify-center gap-4 ">
              {categories.map((category) => {
                return (
                  <Category
                    key={category}
                    categoryName={category}
                    dramaCategories={dramaCategories}
                    setDramaCategories={setDramaCategories}
                  />
                );
              })}
            </div>
          </div>
          <button
            className="text-white bg-blue-600 border-0 py-3 px-6 focus:outline-none hover:bg-blue-500 rounded text-lg font-bold"
            onClick={createThread}
          >
            スレッド作成
          </button>
        </div>
      </div>
    </>
  );
};

export default CreateThread;
