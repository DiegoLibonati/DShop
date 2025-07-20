import { HeaderOption } from "@src/app/entities/entities";

export const HEADER_OPTIONS: HeaderOption[] = [
  {
    id: "shop",
    name: "Shop",
    onClick: () => {
      console.log("Test Shop");
    },
    isMenu: true,
    open: false,
  },
  {
    id: "on_sale",
    name: "On Sale",
    onClick: () => {
      console.log("Test On Sale");
    },
    isMenu: false,
    open: false,
  },
  {
    id: "new_arrivals",
    name: "New Arrivals",
    onClick: () => {
      console.log("Test On New Arrivals");
    },
    isMenu: false,
    open: false,
  },
  {
    id: "Brands",
    name: "Brands",
    onClick: () => {
      console.log("Test On Brands");
    },
    isMenu: false,
    open: false,
  },
];
