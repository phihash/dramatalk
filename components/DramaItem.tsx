import React from "react";
import { FaRegComment, FaRegThumbsUp } from "react-icons/fa";

type Prop = {
  dramaTitle: string;
  broadCastingStationName: string;
};

const DramaItem = ({ dramaTitle, broadCastingStationName }: Prop) => {
  return (
    <div className="p-4 md:w-3/6  w-5/6 m-auto mt-12">
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <img
          className="lg:h-48 md:h-36 w-full object-cover object-center"
          src="https://dummyimage.com/700x480"
          alt="blog"
        />
        <div className="p-6">
          <h2 className="tracking-widest text-sm title-font font-bold text-gray-400 mb-1">
            {broadCastingStationName}
          </h2>
          <h1 className="title-font text-lg font-bold mb-3">{dramaTitle}</h1>
          <div className="flex items-center flex-wrap ">
            <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
              <FaRegComment />
              1.2K
            </span>
            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
              <FaRegThumbsUp />6
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DramaItem;
