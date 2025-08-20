import React, { useRef } from "react";

import { LoaderScreenProps } from "@src/entities/props";

import { LoaderCircular } from "@src/components/core/Loaders/LoaderCircular/LoaderCircular";

import { getIdsByLength } from "shared_core/SharedCore";

import "@src/components/composed/Loaders/LoaderScreen/LoaderScreen.css";

export const LoaderScreen = ({ className }: LoaderScreenProps) => {
  const idLoader = useRef<string[]>(getIdsByLength(1));

  return (
    <div className={`loader-screen ${className}`}>
      <LoaderCircular idRoot={idLoader.current[0]}></LoaderCircular>
    </div>
  );
};
