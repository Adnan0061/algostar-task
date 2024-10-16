"use client";
import { useRef } from "react";
import Hero from "./hero";
import Products from "./products";

export default function Home() {
  const productsRef = useRef<HTMLDivElement>(null);
  const scrollToSection = () => {
    if (productsRef.current) {
      productsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <main className="mx-auto">
      <Hero scrollToSection={scrollToSection} />
      <Products productsRef={productsRef} />
    </main>
  );
}
