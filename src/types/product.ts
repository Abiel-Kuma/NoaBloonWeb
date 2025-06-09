export interface Kit {
  id: string;
  name: string;
  model: string;
  components: string[];
  price: number;
  image: string;
  description?: string;
  specifications?: {
    height?: string;
    capacity?: string;
    powerConsumption?: string;
    waterCapacity?: string;
  };
}

export interface Accessory {
  id: string;
  name: string;
  price: number;
  image: string;
  description?: string;
  category?: string;
}

export interface CartItem {
  id: string;
  type: "kit" | "accessory";
  name: string;
  price: number;
  quantity: number;
  image: string;
}
