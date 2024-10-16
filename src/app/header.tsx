"use client";

import { RootState } from "@/lib/store";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartPanel from "./cartPanel";
import { initializeCart } from "@/lib/features/cartSlice";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const dispatch = useDispatch();
  const { items, isInitialized } = useSelector(
    (state: RootState) => state.cart
  );

  useEffect(() => {
    dispatch(initializeCart());
  }, [dispatch]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-16 transition-colors duration-500  ${
          isScrolled
            ? "bg-white text-gray-800 border-b border-gray-200"
            : "bg-transparent/15 text-white"
        }`}
      >
        <div className="flex items-center justify-between h-full max-w-7xl mx-auto">
          <div className="flex items-center">
            <Image
              src="/favicon.ico"
              alt="Favicon"
              width={32}
              height={32}
              className="mr-2"
            />
            <span className="font-semibold text-lg">Algo Commerce</span>
          </div>
          <div className="flex items-center space-x-4">
            <nav>
              <ul className="flex space-x-10">
                <li>
                  <a href="/#home" className="hover:text-yellow-500 ">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/products" className="hover:text-yellow-500 ">
                    All Products
                  </a>
                </li>
              </ul>
            </nav>
            <div className="relative">
              <button onClick={() => setIsCartOpen(true)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                {isInitialized && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-xs px-1">
                    {items.length}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>
      {isCartOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-stretch">
          <div
            className="bg-transparent flex-1"
            onClick={() => setIsCartOpen(false)}
          ></div>
          <div className="w-full max-w-md" onClick={(e) => e.stopPropagation()}>
            <CartPanel
              isOpen={isCartOpen}
              onClose={() => setIsCartOpen(false)}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
