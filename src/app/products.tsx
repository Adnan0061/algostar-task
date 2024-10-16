"use client";
import React from "react";
import Image from "next/image";
import { useGetProductsQuery } from "./api/apiSlice";
import { Product } from "@/types/types";
import { useDispatch } from "react-redux";
import { addToCart } from "@/lib/features/cartSlice";
// import { Bounce, toast, ToastContainer } from "react-toastify";

const Products = ({
  productsRef,
}: {
  productsRef: React.RefObject<HTMLDivElement>;
}) => {
  const { data: productList, isLoading, isError } = useGetProductsQuery({});
  const dispatch = useDispatch();
  // const toastEmmit = () => toast.success("Product Added");

  return (
    <div className={"container"} id="products" ref={productsRef}>
      <h1 className={"title"}>Our Products</h1>
      <div className={"productGrid"}>
        {isLoading ? (
          [...Array(8)].map((_, index) => (
            <div key={index} className="productCard  animate-pulse">
              <div className="w-full h-60 bg-gray-300 rounded-lg mb-4"></div>
              <div className="h-4 mx-auto bg-gray-300 rounded w-3/4 mb-2"></div>
              <div className="h-4 mx-auto bg-gray-300 rounded w-2/4 mb-5"></div>
              <div className="h-4 mx-auto bg-gray-300 rounded w-1/4 mb-5"></div>
              <div className="h-10 mx-auto bg-gray-300 rounded w-16"></div>
            </div>
          ))
        ) : isError ? (
          <div>Error fetching products</div>
        ) : (
          productList.map((product: Product) => (
            <div key={product.id} className={"productCard"}>
              <Image
                src={product.image}
                width={100}
                height={100}
                alt={product.title}
                className={"productImage"}
              />
              <h2 className={"productName"}>{product.title}</h2>
              <p className={"productPrice"}>${product.price.toFixed(2)}</p>
              <button
                className={"addToCartButton"}
                onClick={() => dispatch(addToCart({ ...product, quantity: 1 }))}
              >
                Add to Cart
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Products;
