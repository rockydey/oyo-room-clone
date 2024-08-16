import React from "react";
import "./search.css";
import FilterSide from "@/components/SearchPageComponents/FilterSide";
import SearchResult from "@/components/SearchPageComponents/SearchResult";

export default function SearchPage() {
  return (
    <div className='h-screen max-w-screen-xl mx-auto main-body'>
      <nav className='sidebar'>
        <div className='scroll-box pr-6'>
          <FilterSide />
        </div>
      </nav>
      <div className='content pl-6 pt-5'>
        <SearchResult />
      </div>
    </div>
  );
}
