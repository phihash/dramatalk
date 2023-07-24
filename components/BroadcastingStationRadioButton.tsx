import React from "react";

interface BroadcastingStationRadioButtonProps {
  station: string;
  setBroadCastingStationName: (name: string) => void;
}

const BroadcastingStationRadioButton: React.FC<
  BroadcastingStationRadioButtonProps
> = ({ station, setBroadCastingStationName }) => {
  const handleBroadCastingStationNameChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setBroadCastingStationName(e.target.value);
  };
  return (
    <div className="flex items-center mb-4">
      <input
        id={station}
        type="radio"
        name="broadCastingStations"
        onChange={handleBroadCastingStationNameChange}
        value={station}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
      />
      <label
        htmlFor={station}
        className="ml-2 text-sm font-bold text-gray-900 cursor-pointer"
      >
        {station}
      </label>
    </div>
  );
};

export default BroadcastingStationRadioButton;
