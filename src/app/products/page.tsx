"use client";
import React from "react";
import Filter from "./filter";
import ProductList from "@/components/ProductList";
import { useDispatch } from "react-redux";
import { addToCart } from "@/lib/features/cartSlice";
import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";
import { useGetProductsQuery } from "../api/apiSlice";
import { Product } from "@/types/types";

const Page = () => {
  const dispatch = useDispatch();
  const { data: productList, isLoading, isError } = useGetProductsQuery({});
  const { rating, price, category } = useSelector(
    (state: RootState) => state.filter
  );

  const dispatchAddToCart = (product: Product) => {
    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  const filteredProducts =
    productList &&
    productList.filter((product: Product) => {
      return (
        product.rating.rate >= rating &&
        product.price <= price &&
        (category === "" || product.category === category)
      );
    });
  return (
    <div className="mt-16 pt-16 max-w-7xl mx-auto grid grid-cols-5 gap-4">
      <div className="col-span-1">
        <Filter />
      </div>
      <div className="col-span-4">
        <ProductList
          isLoading={isLoading}
          isError={isError}
          filteredProducts={filteredProducts}
          dispatchAddToCart={dispatchAddToCart}
        />
      </div>
    </div>
  );
};

export default Page;
