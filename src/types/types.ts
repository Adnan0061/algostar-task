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

interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  isInitialized: boolean;
}

export type { Product, CartItem, CartState };
