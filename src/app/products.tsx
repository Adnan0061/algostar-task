"use client";
import React from "react";
import { useGetProductsQuery } from "./api/apiSlice";
import { Product } from "@/types/types";
import { useDispatch } from "react-redux";
import { addToCart } from "@/lib/features/cartSlice";
import ProductList from "@/components/ProductList";

const Products = ({
  productsRef,
}: {
  productsRef?: React.RefObject<HTMLDivElement>;
}) => {
  const dispatch = useDispatch();
  const { data: productList, isLoading, isError } = useGetProductsQuery({});

  const dispatchAddToCart = (product: Product) => {
    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  return (
    <div className={"container"} id="products" ref={productsRef}>
      <h1 className={"title"}>Our Products</h1>
      <ProductList
        isLoading={isLoading}
        isError={isError}
        filteredProducts={productList}
        dispatchAddToCart={dispatchAddToCart}
      />
    </div>
  );
};

export default Products;
