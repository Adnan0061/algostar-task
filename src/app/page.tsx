import Hero from "./hero";
import Products from "./products";

export default function Home() {
  return (
    <main className="mx-auto">
      <Hero />
      <Products />
      <div className="h-screen bg-red-500 text-background">Footer</div>
    </main>
  );
}
