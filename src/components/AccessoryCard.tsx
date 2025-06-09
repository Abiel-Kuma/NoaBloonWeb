import React from "react";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Accessory } from "@/types/product";
import { useCart } from "@/context/CartContext";

interface AccessoryCardProps {
  accessory: Accessory;
}

const AccessoryCard: React.FC<AccessoryCardProps> = ({ accessory }) => {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: accessory.id,
        type: "accessory",
        name: accessory.name,
        price: accessory.price,
        image: accessory.image,
      },
    });
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border border-gray-200 overflow-hidden">
      <CardHeader className="p-0">
        <div className="aspect-square overflow-hidden">
          <img
            src={accessory.image}
            alt={accessory.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </CardHeader>

      <CardContent className="p-6">
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
            {accessory.name}
          </h3>

          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-gray-900">
              ${accessory.price.toFixed(2)}
            </span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Button
          onClick={handleAddToCart}
          className="w-full group-hover:bg-blue-700 transition-colors"
          size="lg"
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AccessoryCard;
