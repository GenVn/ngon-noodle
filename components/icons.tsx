import {
  House,
  Soup,
  ShoppingBasket,
  User,
  type Icon as LucideIcon,
} from "lucide-react";

export type Icon = typeof LucideIcon;
export const Icons = {
  home: House,
  menu: Soup,
  order: ShoppingBasket,
  profile: User,
};
