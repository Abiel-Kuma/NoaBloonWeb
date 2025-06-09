import React from "react";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Kit } from "@/types/product";
import { useCart } from "@/context/CartContext";

interface KitCardProps {
  kit: Kit;
}

const KitCard: React.FC<KitCardProps> = ({ kit }) => {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: kit.id,
        type: "kit",
        name: kit.name,
        price: kit.price,
        image: kit.image,
      },
    });
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border border-gray-200 overflow-hidden">
      <CardHeader className="p-0">
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={kit.image}
            alt={kit.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </CardHeader>

      <CardContent className="p-6">
        <div className="space-y-3">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
              {kit.name}
            </h3>
            <p className="text-sm text-gray-600 mt-1">Model: {kit.model}</p>
          </div>

          <div>
            <p className="text-sm font-medium text-gray-700 mb-2">
              Components:
            </p>
            <div className="flex flex-wrap gap-1">
              {kit.components.map((component, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {component}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between pt-2">
            <span className="text-2xl font-bold text-gray-900">
              ${kit.price.toFixed(2)}
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

export default KitCard;
