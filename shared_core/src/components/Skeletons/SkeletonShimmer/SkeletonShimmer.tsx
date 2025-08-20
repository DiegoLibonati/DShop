import React from "react";

import { SkeletonShimmerProps } from "@src/entities/props";

import "@src/components/Skeletons/SkeletonShimmer/SkeletonShimmer.css";

export const SkeletonShimmer = ({
  rounded,
  className,
}: SkeletonShimmerProps) => {
  return (
    <div
      className={`skeleton-shimmer ${
        rounded && "skeleton-shimmer--rounded"
      } ${className}`}
    ></div>
  );
};
