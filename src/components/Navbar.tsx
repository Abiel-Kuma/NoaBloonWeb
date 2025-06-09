import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, User, Menu, X, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { state: cartState } = useCart();
  const location = useLocation();

  const navItems = [
    { name: "Vertical Farms", path: "/" },
    { name: "Accessories", path: "/accessories" },
    { name: "About Us", path: "/about" },
  ];

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-md border-b border-noabloon-light-green-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-noabloon-deep-green to-noabloon-light-green rounded-lg flex items-center justify-center">
                <Leaf className="text-white h-6 w-6" />
              </div>
              <span className="ml-2 text-xl font-bold text-noabloon-deep-green-800">
                NoaBloon
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={cn(
                    "px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200",
                    isActivePath(item.path)
                      ? "text-noabloon-deep-green bg-noabloon-light-green-50"
                      : "text-noabloon-grayish-blue-700 hover:text-noabloon-deep-green hover:bg-noabloon-light-green-50",
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop Right Side */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Shopping Cart */}
            <Button
              variant="ghost"
              size="sm"
              className="relative hover:bg-noabloon-light-green-50"
            >
              <ShoppingCart className="h-5 w-5 text-noabloon-grayish-blue-700" />
              {cartState.totalItems > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-noabloon-deep-green text-white">
                  {cartState.totalItems}
                </Badge>
              )}
            </Button>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-noabloon-grayish-blue-300 text-noabloon-grayish-blue-700 hover:bg-noabloon-light-green-50"
                >
                  <User className="h-4 w-4 mr-2" />
                  Account
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Login</DropdownMenuItem>
                <DropdownMenuItem>Register</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="hover:bg-noabloon-light-green-50"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-noabloon-grayish-blue-700" />
              ) : (
                <Menu className="h-6 w-6 text-noabloon-grayish-blue-700" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-noabloon-light-green-200">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={cn(
                    "block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200",
                    isActivePath(item.path)
                      ? "text-noabloon-deep-green bg-noabloon-light-green-50"
                      : "text-noabloon-grayish-blue-700 hover:text-noabloon-deep-green hover:bg-noabloon-light-green-50",
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <div className="pt-4 pb-2 border-t border-noabloon-light-green-200 mt-4">
                <div className="flex items-center justify-between px-3">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="relative hover:bg-noabloon-light-green-50"
                  >
                    <ShoppingCart className="h-5 w-5 mr-2 text-noabloon-grayish-blue-700" />
                    Cart
                    {cartState.totalItems > 0 && (
                      <Badge className="ml-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-noabloon-deep-green text-white">
                        {cartState.totalItems}
                      </Badge>
                    )}
                  </Button>

                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-noabloon-grayish-blue-300 text-noabloon-grayish-blue-700"
                    >
                      Login
                    </Button>
                    <Button
                      size="sm"
                      className="bg-noabloon-deep-green hover:bg-noabloon-deep-green-700 text-white"
                    >
                      Register
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
