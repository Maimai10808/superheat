import { useEffect, useMemo, useCallback } from "react";
import { useConnect, useDisconnect, useAccount, useBalance, useSwitchChain, useChainId } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";

export function useOnChainState() {
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();
  const { address, isConnected } = useAccount();
  const { switchChain } = useSwitchChain();
  const chainId = useChainId();

  const connector = connectors[0];
  const { data: rawbalanceData } = useBalance({ address });
  const balance = useMemo(
    () => (rawbalanceData ? `${rawbalanceData.formatted} ${rawbalanceData.symbol}` : "0"),
    [rawbalanceData],
  );

  useEffect(() => {
    try {
      const sepolia_id = sepolia.id;
      if (chainId != sepolia_id) {
        switchChain({ chainId: sepolia_id });
      }
    } catch (error) {
      console.error("Oops,switchChain failed!!!!!!!!", error);
    }
  }, [connect, connector, switchChain, chainId]);

  const logChainId = useCallback(() => {
    console.log("chainId", chainId);
  }, [chainId]);

  function connectWallet() {
    connect;
  }

  function disnectWallet() {
    disconnect;
  }

  return {
    connectWallet,
    disnectWallet,
    isConnected,
    address,
    balance,
    chainId,
  };
}
