export interface Kit {
  id: string;
  name: string;
  model: string;
  components: string[];
  price: number;
  image: string;
}

export interface Accessory {
  id: string;
  name: string;
  price: number;
  image: string;
}

export interface CartItem {
  id: string;
  type: "kit" | "accessory";
  name: string;
  price: number;
  quantity: number;
  image: string;
}
