import React from 'react';
import { Filing, RecommendedFiling } from './Filing';

import './style.css';

export const FileRecommendation = ({ pageName, data }) => {
  let component_name = 'FileRecommendation_employee';

  data = data.slice(0, 3);
  return (
    <div
      className=" w-[100%] border-lg bg-white shadow mt-3 mb-3 box-border
    px-4 py-2"
    >
      <p className="font-semibold text-black text-xl font-['Manrope'] py-2">
        Recommended(24)
      </p>

      <div class="flex flex-nowrap overflow-x-auto gap-4 box-border w-full">
        {data.map((item, index) => {
          return (
            <RecommendedFiling folder={item} component_name={component_name} />
          );
        })}
      </div>
    </div>
  );
};
