"use client";
import React from "react";
import Image from "next/image";
import { useGetProductsQuery } from "./api/apiSlice";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const Products = () => {
  const { data: productList, isLoading, isError } = useGetProductsQuery({});
  // if (isLoading) return <div>Loading...</div>;
  // if (isError) return <div>Error fetching products</div>;
  return (
    <div className={"container"}>
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
              <button className={"addToCartButton"}>Add to Cart</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Products;
