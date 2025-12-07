"use client";
import { WagmiProvider } from "wagmi";
import { config } from "../config";
import React from "react";

import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClient } from "@/lib/react-query";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </WagmiProvider>
    </QueryClientProvider>
  );
}

{
  /* <ContextProvider cookies={cookies}>{children}</ContextProvider> */
}
