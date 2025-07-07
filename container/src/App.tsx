import React, { lazy, Suspense } from "react";

const HomeLazy = lazy(() => import("@src/components/apps/HomeApp/HomeApp"));

export const App = () => {
  return (
    <div>
      <div>Header</div>
      <Suspense fallback={<div>Cargando Home</div>}>
        <HomeLazy></HomeLazy>
      </Suspense>
    </div>
  );
};
