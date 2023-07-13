import React from "react";
import Header from "@/components/Header";
const CreateThread = () => {
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

            <div className="flex items-center mb-4">
              <input
                id="default-radio-1"
                type="radio"
                value=""
                name="default-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600 "
              />
              <label
                htmlFor="default-radio-1"
                className="ml-2 text-sm font-bold text-gray-900 cursor-pointer"
              >
                TBS系
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                id="default-radio-2"
                type="radio"
                value=""
                name="default-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="default-radio-2"
                className="ml-2 text-sm font-bold text-gray-900 cursor-pointer"
              >
                日本テレビ系
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                id="default-radio-3"
                type="radio"
                value=""
                name="default-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="default-radio-3"
                className="ml-2 text-sm font-bold text-gray-900 cursor-pointer"
              >
                朝日系
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                id="default-radio-4"
                type="radio"
                value=""
                name="default-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="default-radio-4"
                className="ml-2 text-sm font-bold text-gray-900 cursor-pointer"
              >
                フジテレビ系
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                id="default-radio-5"
                type="radio"
                value=""
                name="default-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="default-radio-5"
                className="ml-2 text-sm font-bold text-gray-900 cursor-pointer"
              >
                NHK系
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                id="default-radio-6"
                type="radio"
                value=""
                name="default-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="default-radio-6"
                className="ml-2 text-sm font-bold text-gray-900 cursor-pointer"
              >
                ネット
              </label>
            </div>
          </div>
          <div className="mb-8">
            <h2 className="text-gray-900 text-2xl mb-6 font-bold title-font">
              <label htmlFor="" className="leading-7 text-gray-600">
                カテゴリ
              </label>
            </h2>
            {/*  */}

            <div className="w-full flex flex-wrap justify-center gap-4 ">
              {/* checkboxいれ */}
              <div  className="w-5/12 text-center">
                <input
                  type="checkbox"
                  id="choose-me1"
                  className="peer hidden"
                />
                <label
                  htmlFor="choose-me1"
                  className="select-none cursor-pointer rounded-lg border-2 border-sky-200 bg-sky-200 block
   py-3 px-6 font-bold text-white transition-colors duration-200 ease-in-out peer-checked:bg-sky-500 peer-checked:text-white peer-checked:border-sky-500 "
                >
                  コメディ
                </label>
              </div>

              <div  className="w-5/12 text-center">
                <input
                  type="checkbox"
                  id="choose-me2"
                  className="peer hidden"
                />
                <label
                  htmlFor="choose-me2"
                  className="select-none cursor-pointer rounded-lg border-2 border-sky-200 bg-sky-200 block
   py-3 px-6 font-bold text-white transition-colors duration-200 ease-in-out peer-checked:bg-sky-500 peer-checked:text-white peer-checked:border-sky-500 "
                >
                  恋愛
                </label>
              </div>

              <div  className="w-5/12 text-center">
                <input
                  type="checkbox"
                  id="choose-me3"
                  className="peer hidden"
                />
                <label
                  htmlFor="choose-me3"
                  className="select-none cursor-pointer rounded-lg border-2 border-sky-200 bg-sky-200 block
   py-3 px-6 font-bold text-white transition-colors duration-200 ease-in-out peer-checked:bg-sky-500 peer-checked:text-white peer-checked:border-sky-500 "
                >
                  シリアス
                </label>
              </div>

              <div  className="w-5/12 text-center">
                <input
                  type="checkbox"
                  id="choose-me4"
                  className="peer hidden"
                />
                <label
                  htmlFor="choose-me4"
                  className="select-none cursor-pointer rounded-lg border-2 border-sky-200 bg-sky-200 block
   py-3 px-6 font-bold text-white transition-colors duration-200 ease-in-out peer-checked:bg-sky-500 peer-checked:text-white peer-checked:border-sky-500 "
                >
                  感動
                </label>
              </div>

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
