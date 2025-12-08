"use client";

import React from "react";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { wagmiAdapter, projectId } from "@/config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createAppKit } from "@reown/appkit/react";
import { mainnet, sepolia } from "@reown/appkit/networks";
import { cookieToInitialState, WagmiProvider, type Config } from "wagmi";

export function Providers({ children, cookies }: { children: React.ReactNode; cookies: string | null }) {
  // Set up queryClient
  const queryClient = new QueryClient();
  const initialState = cookieToInitialState(wagmiAdapter.wagmiConfig as Config, cookies);

  if (!projectId) {
    throw new Error("Project ID is not defined");
  }

  // Set up metadata
  const metadata = {
    name: "superheat",
    description: "superheat",
    url: "https://appkitexampleapp.com", // origin must match your domain & subdomain
    icons: ["https://avatars.githubusercontent.com/u/179229932"],
  };

  // Create the modal
  const modal = createAppKit({
    adapters: [wagmiAdapter],
    projectId,
    networks: [mainnet, sepolia],
    defaultNetwork: mainnet,
    metadata: metadata,
    features: {
      analytics: true, // Optional - defaults to your Cloud configuration
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <WagmiProvider config={wagmiAdapter.wagmiConfig as Config} initialState={initialState}>
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </WagmiProvider>
    </QueryClientProvider>
  );
}

{
  /* <ContextProvider cookies={cookies}>{children}</ContextProvider> */
}
