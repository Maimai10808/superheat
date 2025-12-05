import { useState, useEffect } from "react";
import { useConnect, useDisconnect, useAccount, useBalance, useSwitchChain, useChainId } from "wagmi";

export function useOnChainState() {
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();
  const { address, isConnected } = useAccount();
  const { switchChain } = useSwitchChain();
  const chainId = useChainId();

  const connector = connectors[0];
  const { data: rawbalanceData } = useBalance({ address });
  const balance = rawbalanceData ? `${rawbalanceData.formatted} ${rawbalanceData.symbol}` : "0";

  function ConnectWallet() {
    connect({ connector });
    if (chainId != 11155111) {
      try {
        switchChain({ chainId: 11155111 });
      } catch {
        console.log("Oops,switchChain failed!!!!!!!! ");
      }
    }
    console.log(chainId);
  }

  function DisconnectWallet() {
    return disconnect();
  }

  console.log(balance);

  return {
    ConnectWallet,
    DisconnectWallet,
    isConnected,
    address,
    balance,
    chainId,
  };
}
