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
    <Card className="group hover:shadow-xl transition-all duration-300 border border-noabloon-light-green-200 overflow-hidden bg-white hover:border-noabloon-deep-green-300">
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
          <h3 className="text-lg font-semibold text-noabloon-deep-green-800 group-hover:text-noabloon-deep-green transition-colors">
            {accessory.name}
          </h3>

          {accessory.description && (
            <p className="text-sm text-noabloon-grayish-blue-600">
              {accessory.description}
            </p>
          )}

          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-noabloon-deep-green-800">
              ${accessory.price.toFixed(2)}
            </span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Button
          onClick={handleAddToCart}
          className="w-full bg-noabloon-deep-green hover:bg-noabloon-deep-green-700 text-white group-hover:bg-noabloon-deep-green-600 transition-colors"
          size="lg"
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Agregar al Carrito
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AccessoryCard;
