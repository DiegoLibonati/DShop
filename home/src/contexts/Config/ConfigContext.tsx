import React, { useContext, useState } from "react";

import { Callbacks, MountOptions } from "@src/entities/entities";
import type {
  ConfigContext as ConfigContextT,
  ConfigProviderProps,
} from "@src/entities/contexts";

import { ConfigContext } from "@src/contexts/Config/ConfigProvider";

export const ConfigProvider = ({ children }: ConfigProviderProps) => {
  const [callbacks, setCallbacks] = useState<Callbacks | null>(null);

  const handleSetInitialConfig = ({
    callbacks,
  }: Pick<MountOptions, "callbacks">) => {
    setCallbacks(callbacks);
  };

  return (
    <ConfigContext.Provider
      value={{
        callbacks: callbacks,
        handleSetInitialConfig: handleSetInitialConfig,
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
};

export const useConfigContext = (): ConfigContextT => {
  return useContext(ConfigContext)!;
};
