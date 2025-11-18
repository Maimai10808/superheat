"use client";
import detectEthereumProvider from '@metamask/detect-provider';
import { Button } from "@/components/ui/button";
import Image from 'next/image'
import { useState, useEffect } from 'react';
import { ethers } from 'ethers'

import { MetaMaskInpageProvider } from "@metamask/providers";



export default function WalletButton() {

    const [isConnected, setIsConnected] = useState(false);
    const [account, setAccount] = useState<string | undefined>();
    const [balance, setBalance] = useState<number | undefined>();
    const [chainid, setChainid] = useState<string | undefined>();


        const ConnectedMetaMask = async () => {

        const provider = new ethers.BrowserProvider(window.ethereum!);

            // 读取钱包地址
        const accounts = await provider.send("eth_requestAccounts", []);
        const account = accounts[0]
        setAccount(account)
        console.log(`钱包地址: ${account}`)


        // 读取chainid
        const { chainId } = await provider.getNetwork()
        console.log(`chainid: ${chainId}`)
        setChainid(String(chainId))

        // 读取ETH余额
        const signer = await provider.getSigner()
        const balance = await provider.getBalance(signer.getAddress());const
        formattedBalance = ethers.formatUnits(balance, 18);
        console.log(`以太坊余额： ${formattedBalance}`)
        setBalance(Number(formattedBalance))

        if (accounts.length > 0) {
          setIsConnected(true);
        }

        }

        const TerminateMetaMask = async () => {
        setIsConnected(false);
        setBalance(undefined);
        setAccount(undefined);
  };


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
