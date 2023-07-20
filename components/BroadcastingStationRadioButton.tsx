import React from "react";

interface BroadcastingStationRadioButtonProps {
  broadcastingStationName: string;
}

const BroadcastingStationRadioButton: React.FC<
  BroadcastingStationRadioButtonProps
> = ({ broadcastingStationName }) => {
  return (
    <div className="flex items-center mb-4">
      <input
        id={broadcastingStationName}
        type="radio"
        value={broadcastingStationName}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
      />
      <label
        htmlFor={broadcastingStationName}
        className="ml-2 text-sm font-bold text-gray-900 cursor-pointer"
      >
        {broadcastingStationName}
      </label>
    </div>
  );
};

export default BroadcastingStationRadioButton;
