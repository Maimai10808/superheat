'use client'
import { useChains, useSwitchChain } from 'wagmi'

export default function Home() {

     const { switchChain } = useSwitchChain()
     const chains = useChains()


  return (
    <>
      <main>
       <div>
      {chains.map((chain) => (
        <button key={chain.id} onClick={() => switchChain({ chainId: chain.id })}>
          {chain.name}
        </button>
      ))}
    </div>
      </main>
    </>
  );
}
