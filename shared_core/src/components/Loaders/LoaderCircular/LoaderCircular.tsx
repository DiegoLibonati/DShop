import React from "react";

import { LoaderCircularProps } from "@src/entities/props";

import "@src/components/Loaders/LoaderCircular/LoaderCircular.css";

export const LoaderCircular = ({ className }: LoaderCircularProps) => {
  return <div className={`loader ${className}`}></div>;
};
