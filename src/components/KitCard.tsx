import React from "react";
import { ShoppingCart, Droplets, Zap, Ruler } from "lucide-react";
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
    <Card className="group hover:shadow-xl transition-all duration-300 border border-noabloon-light-green-200 overflow-hidden bg-white hover:border-noabloon-deep-green-300">
      <CardHeader className="p-0">
        <div className="aspect-[4/3] overflow-hidden"></div>
      </CardHeader>

      <CardContent className="p-6">
        <div className="space-y-3">
          <div>
            <h3 className="text-lg font-semibold text-noabloon-deep-green-800 group-hover:text-noabloon-deep-green transition-colors">
              {kit.name}
            </h3>
            <p className="text-sm text-noabloon-grayish-blue-600 mt-1">
              Modelo: {kit.model}
            </p>
          </div>

          <div>
            <p className="text-sm font-medium text-noabloon-grayish-blue-700 mb-2">
              Incluye:
            </p>
            <div className="flex flex-wrap gap-1">
              {kit.components.map((component, index) => (
                <Badge
                  key={index}
                  className="text-xs bg-noabloon-light-green-100 text-noabloon-deep-green-700 hover:bg-noabloon-light-green-200"
                >
                  {component}
                </Badge>
              ))}
            </div>
          </div>

          {kit.specifications && (
            <div className="pt-2 space-y-1">
              {kit.specifications.height && (
                <div className="flex items-center text-xs text-noabloon-grayish-blue-600">
                  <Ruler className="w-3 h-3 mr-1" />
                  Altura: {kit.specifications.height}
                </div>
              )}
              {kit.specifications.capacity && (
                <div className="flex items-center text-xs text-noabloon-grayish-blue-600">
                  <Droplets className="w-3 h-3 mr-1" />
                  Capacidad: {kit.specifications.capacity}
                </div>
              )}
              {kit.specifications.powerConsumption && (
                <div className="flex items-center text-xs text-noabloon-grayish-blue-600">
                  <Zap className="w-3 h-3 mr-1" />
                  Potencia: {kit.specifications.powerConsumption}
                </div>
              )}
            </div>
          )}

          <div className="flex items-center justify-between pt-2">
            <span className="text-2xl font-bold text-noabloon-deep-green-800">
              ${kit.price.toFixed(2)}
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

export default KitCard;
