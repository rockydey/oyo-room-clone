"use client";
import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

interface FcFilterItem {
  id: string;
  label: string;
}

interface FacilitiesProps {
  fcFilters: Record<string, boolean>;
  setFcFilters: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
  fcFilterList: FcFilterItem[];
  setClear: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Facilities({
  fcFilters,
  setFcFilters,
  fcFilterList,
  setClear,
}: FacilitiesProps) {
  const [show, setShow] = useState<boolean>(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setFcFilters((prevFilters) => ({
      ...prevFilters,
      [name]: checked,
    }));
    setClear(true);
  };

  return (
    <div>
      <h3 className='text-sm font-bold text-[#222] mb-4'>Home Facilities</h3>
      <div
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        className=''>
        {show
          ? fcFilterList.map((filter) => (
              <div key={filter.id} className='form-control'>
                <label className='label justify-start gap-2'>
                  <input
                    name={filter.id}
                    checked={fcFilters[filter.id] || false}
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
          : fcFilterList.slice(0, 5).map((filter) => (
              <div key={filter.id} className='form-control'>
                <label className='label justify-start gap-2'>
                  <input
                    name={filter.id}
                    checked={fcFilters[filter.id] || false}
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
