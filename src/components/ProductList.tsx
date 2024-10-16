import { Product } from "@/types/types";
import React from "react";
import Image from "next/image";

const ProductList = ({
  isLoading,
  isError,
  filteredProducts,
  dispatchAddToCart,
}: {
  isLoading: boolean;
  isError: boolean;
  filteredProducts: Product[];
  dispatchAddToCart: (product: Product) => void;
}) => {
  return (
    <div className={"productGrid"}>
      {isLoading ? (
        [...Array(8)].map((_, index) => (
          <div key={index} className="productCard  animate-pulse">
            <div className="w-full h-60 bg-gray-300 rounded-lg mb-4"></div>
            <div className="h-4 mx-auto bg-gray-300 rounded w-3/4 mb-2"></div>
            <div className="h-4 mx-auto bg-gray-300 rounded w-2/4 mb-5"></div>
            <div className="h-4 mx-auto bg-gray-300 rounded w-1/4 mb-5"></div>
            <div className="h-4 mx-auto bg-gray-300 rounded w-2/5 mb-5"></div>
            <div className="h-10 mx-auto bg-gray-300 rounded w-32"></div>
          </div>
        ))
      ) : isError ? (
        <div>Error fetching products</div>
      ) : (
        filteredProducts.map((product: Product) => (
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
            <p className={"productPrice"}>
              {Array(5)
                .fill("★")
                .map((star, index) => {
                  const fillPercentage = Math.min(
                    Math.max((product.rating.rate - index) * 100, 0),
                    100
                  );
                  return (
                    <span
                      key={index}
                      style={{ position: "relative", display: "inline-block" }}
                    >
                      <span style={{ color: "#d3d3d3" }}>{star}</span>
                      <span
                        style={{
                          position: "absolute",
                          left: 0,
                          top: 0,
                          width: `${fillPercentage}%`,
                          overflow: "hidden",
                          color: "#ffd700",
                        }}
                      >
                        {star}
                      </span>
                    </span>
                  );
                })}
            </p>
            <button
              className={"addToCartButton"}
              onClick={() => dispatchAddToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductList;
