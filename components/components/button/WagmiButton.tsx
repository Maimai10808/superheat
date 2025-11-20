'use client'
import { useOnChainState } from "@/hooks/useOnChainState"
import { Button } from "@/components/ui/button";
import Image from 'next/image'

export function WagmiButton() {
  const {
  ConnectWallet,
  DisconnectWallet,
  isConnected,
  address,
  balance,
  chainId,
} = useOnChainState();

  return (
  <div>
    {isConnected ? (
              <><p>chainId : {chainId}</p>
                <p>Connected to {address}</p>
                <p>Balance: {balance}</p>

                {/* <button onClick={batchRequest}>Batch Request</button> */}
                <Button variant= "orgcapsule" onClick={DisconnectWallet}>
                      Disconnect
                </Button>
              </>
            ) : (
              <>
                <Button variant="outline" size="icon" className="rounded-full bg-gray-500 " onClick={ConnectWallet}>
                      <Image
                      src="/images/metamask-icon.png"
                      width={20}
                      height={20}
                      alt="Picture of the author"
                    />
                </Button>
              </>
            )}
  </div>)

}
