import React from "react";
import { useId } from "react";

interface CategoryProps {
  categoryName: string;
  dramaCategories: Array<string>;
  setDramaCategories: React.Dispatch<React.SetStateAction<string[]>>;
}

const Category: React.FC<CategoryProps> = ({
  categoryName,
  setDramaCategories,
  dramaCategories,
}) => {
  const checkId = useId();
  const handleCategoriesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // if (e.target.checked) {
    //   setSelectedCheckBox([...selectedCheckBox, choice])
    // } else {
    //   setSelectedCheckBox(selectedCheckBox.filter(item => item !== choice))
    // }
    setDramaCategories([e.target.value, ...dramaCategories]);
    console.log(dramaCategories);
  };
  return (
    <div className="w-5/12 text-center">
      <input
        type="checkbox"
        id={checkId}
        value={categoryName}
        className="peer hidden"
        onChange={handleCategoriesChange}
      />
      <label
        htmlFor={checkId}
        className="text-sm md:text-base select-none cursor-pointer rounded-lg border-2 border-sky-200 bg-sky-200 block
   py-3 px-6 font-bold text-white transition-colors duration-200 ease-in-out peer-checked:bg-sky-500 peer-checked:text-white peer-checked:border-sky-500 "
      >
        {categoryName}
      </label>
    </div>
  );
};

export default Category;
