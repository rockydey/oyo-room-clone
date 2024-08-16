"use client";
import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

interface FilterItem {
  id: string;
  label: string;
}

interface CollectionsProps {
  cFilters: Record<string, boolean>;
  setCFilters: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
  cFilterList: FilterItem[];
  setClear: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Collections({
  cFilters,
  setCFilters,
  cFilterList,
  setClear,
}: CollectionsProps) {
  const [show, setShow] = useState<boolean>(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setCFilters((prevFilters) => ({
      ...prevFilters,
      [name]: checked,
    }));
    setClear(true);
  };

  return (
    <div>
      <h3 className='text-sm font-bold text-[#222] mb-4'>Collections</h3>
      <div
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        className=''>
        {show
          ? cFilterList.map((filter) => (
              <div key={filter.id} className='form-control'>
                <label className='label justify-start gap-2'>
                  <input
                    name={filter.id}
                    checked={cFilters[filter?.id] || false}
                    onChange={handleCheckboxChange}
                    type='checkbox'
                    className='checkbox'
                  />
                  <span className='label-text text-sm font-normal text-[#222] cursor-pointer'>
                    {filter.label}
                  </span>
                </label>
              </div>
            ))
          : cFilterList.slice(0, 5).map((filter) => (
              <div key={filter.id} className='form-control'>
                <label className='label justify-start gap-2'>
                  <input
                    name={filter.id}
                    checked={cFilters[filter?.id] || false}
                    onChange={handleCheckboxChange}
                    type='checkbox'
                    className='checkbox'
                  />
                  <span className='label-text text-sm font-normal text-[#222] cursor-pointer'>
                    {filter.label}
                  </span>
                </label>
              </div>
            ))}
      </div>
      <div>
        {show ? (
          <button
            onClick={() => setShow(false)}
            style={{ color: "#ee2a24", marginTop: "18px" }}
            className='flex items-center gap-1 text-sm font-semibold'>
            <FaMinus /> View Less
          </button>
        ) : (
          <button
            onClick={() => setShow(true)}
            style={{ color: "#ee2a24", marginTop: "18px" }}
            className='flex items-center gap-1 text-sm font-semibold'>
            <FaPlus /> View More
          </button>
        )}
      </div>
    </div>
  );
}
