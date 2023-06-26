import React from 'react';
import Svgicons from '../../../assets/Svgicons';

export const Filing = ({ folder, component_name }) => {
  return (
    <div
      className="w-[12.75rem] rounded-lg border border-solid
    border-[#C5C5C5] box-border px-3 pb-2 pt-1"
    >
      <div className="w-full flex justify-between items-center">
        <a href={folder?.url} target="_blank">
          <Svgicons action="file" />
        </a>
        <Svgicons action="ellipsis" />
      </div>
      <p className="font-['Inter'] font-bold text-[#101828] text-[13px] mt-2 mb-2">
        {folder?.filename}
      </p>
      <div className="flex justify-between items-center">
        <div
          className="flex items-center gap-1 font-['Inter'] text-[10px] text-[#66708] 
        font-normal bg-[#F1F1F1] rounded-[9px] px-1 py-1"
        >
          {folder?.tag == 'public' ? (
            <>
              <span>
                <Svgicons action="globe" />
              </span>
              {folder?.tag}
            </>
          ) : (
            <span className="px-1">{folder?.tag} </span>
          )}
        </div>
        <div
          className="flex items-center font-['Inter'] text-[10px] text-[#66708] 
        font-normal"
        >
          {folder?.created_at}
        </div>
      </div>
    </div>
  );
};

export const RecommendedFiling = ({ folder }) => {
  let isoDateString = folder?.created_at;
  const date = new Date(isoDateString);
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    // second: 'numeric',
    // timeZoneName: 'short',
  };
  const formattedDate = date.toLocaleDateString(undefined, options);

  let tag = folder?.grade ?? 'public';
  return (
    <div
      className="w-[12.75rem] rounded-lg border border-solid
    border-[#C5C5C5] box-border px-3 pb-2 pt-1"
    >
      <div className="w-full flex justify-between items-center">
        <a href={folder?.url} target="_blank">
          <Svgicons action="file" />
        </a>
        <Svgicons action="ellipsis" />
      </div>
      <p className="font-['Inter'] font-bold text-[#101828] text-[13px] mt-2 mb-2">
        {folder?.name}
      </p>
      <div className="flex justify-between items-center">
        <div
          className="flex items-center gap-1 font-['Inter'] text-[10px] text-[#66708] 
        font-normal bg-[#F1F1F1] rounded-[9px] px-1 py-1"
        >
          <span className="px-1">{tag} </span>
        </div>
        <div
          className="flex items-center font-['Inter'] text-[10px] text-[#66708] 
        font-normal"
        >
          {formattedDate}
        </div>
      </div>
    </div>
  );
};
