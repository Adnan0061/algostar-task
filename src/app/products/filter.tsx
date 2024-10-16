"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setRatingFilter,
  setPriceFilter,
  setCategoryFilter,
} from "../../lib/features/filterSlice";
import { RootState } from "@/lib/store";

const Filter = () => {
  const dispatch = useDispatch();
  const { rating, price, category } = useSelector(
    (state: RootState) => state.filter
  );

  const handleRatingChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setRatingFilter(Number(e.target.value)));
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setPriceFilter(Number(e.target.value)));
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setCategoryFilter(e.target.value));
  };

  return (
    <div className="">
      <h3 className="text-2xl font-bold mb-4">Filters</h3>

      <div className="mb-4 flex items-center gap-2">
        <label htmlFor="rating" className="text-gray-600 font-semibold">
          Rating:
        </label>
        <select
          id="rating"
          className="p-2 border w-full"
          value={rating}
          onChange={handleRatingChange}
        >
          <option value={0}>All</option>
          <option value={1}>1+ Stars</option>
          <option value={2}>2+ Stars</option>
          <option value={3}>3+ Stars</option>
          <option value={4}>4+ Stars</option>
          <option value={5}>5 Stars</option>
        </select>
      </div>

      <div className="mb-4 flex flex-col items-start gap-2">
        <label htmlFor="price" className="text-gray-600 font-semibold">
          Max Price: ${price}
        </label>
        <input
          type="range"
          id="price"
          min="0"
          max="1000"
          value={price}
          onChange={handlePriceChange}
        />
      </div>

      <div className="mb-4 flex items-center gap-2">
        <label htmlFor="category" className="text-gray-600 font-semibold">
          Category:
        </label>
        <select
          id="category"
          value={category}
          className="p-2 border w-full"
          onChange={handleCategoryChange}
        >
          <option value="">All</option>
          <option value="electronics">Electronics</option>
          <option value="men&#39;s clothing">Men&#39;s Clothing</option>
          <option value="women&#39;s clothing">Women&#39;s Clothing</option>
          <option value="jewelery">Jewelery</option>
          {/* Add more categories as needed */}
        </select>
      </div>
    </div>
  );
};

export default Filter;
