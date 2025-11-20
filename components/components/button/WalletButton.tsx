"use client";

import { useethersState } from "@/hooks/useethersState"
import { Button } from "@/components/ui/button";
import Image from 'next/image'

export default function WalletButton() {

const {
    isConnected,
    account,
    balance,
    TerminateMetaMask,
    ConnectedMetaMask,

} = useethersState()

      return (
        <div className=" flex items-center space-x-4">
            {isConnected ? (
          <>
            <p>Connected to {account}</p>
            <p>Balance: {balance} ETH</p>

            {/* <button onClick={batchRequest}>Batch Request</button> */}
            <Button variant= "orgcapsule" onClick={TerminateMetaMask}>
                  Disconnect
            </Button>
          </>
        ) : (
          <>
            <Button variant="outline" size="icon" className="rounded-full bg-gray-500 " onClick={ConnectedMetaMask}>
                  <Image
                  src="/metamask-icon.png"
                  width={20}
                  height={20}
                  alt="Picture of the author"
                />
            </Button>
          </>
        )}

        </div>
      )
}
