"use client";
import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

interface CateFilterItem {
  id: string;
  title: string;
  description: string;
}

interface CategoriesProps {
  cateFilters: Record<string, boolean>;
  setCateFilters: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
  cateFilterList: CateFilterItem[];
  setClear: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Categories({
  cateFilters,
  setCateFilters,
  cateFilterList,
  setClear,
}: CategoriesProps) {
  const [show, setShow] = useState<boolean>(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setCateFilters((prevFilters) => ({
      ...prevFilters,
      [name]: checked,
    }));
    setClear(true);
  };

  return (
    <div>
      <h3 className='text-sm font-bold text-[#222] mb-4'>Categories</h3>
      <div
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        className=''>
        {show
          ? cateFilterList.map((filter) => (
              <div key={filter.id} className='form-control'>
                <label className='label justify-start gap-2'>
                  <input
                    name={filter.id}
                    checked={cateFilters[filter.id] || false}
                    onChange={handleCheckboxChange}
                    type='checkbox'
                    className='checkbox mb-5'
                  />
                  <p className='label-text text-sm font-normal text-[#222] cursor-pointer'>
                    <span className='font-semibold'>{filter.title}</span> -{" "}
                    <span>{filter.description}</span>
                  </p>
                </label>
              </div>
            ))
          : cateFilterList.slice(0, 5).map((filter) => (
              <div key={filter.id} className='form-control'>
                <label className='label justify-start gap-2'>
                  <input
                    name={filter.id}
                    checked={cateFilters[filter.id] || false}
                    onChange={handleCheckboxChange}
                    type='checkbox'
                    className='checkbox mb-5'
                  />
                  <p className='label-text text-sm font-normal text-[#222] cursor-pointer'>
                    <span className='font-semibold'>{filter.title}</span> -{" "}
                    <span>{filter.description}</span>
                  </p>
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
