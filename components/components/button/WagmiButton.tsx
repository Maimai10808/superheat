// 基础连接按钮组件
'use client'

import {
  useConnect,
  useDisconnect,
  useAccount,
  useEnsName,
} from 'wagmi'

export function WagmiButton() {
  const { connect, connectors } = useConnect()
  const { disconnect } = useDisconnect()
  const { address, isConnected } = useAccount()
  const { data: ensName } = useEnsName({ address })

  const connector = connectors[0] // 默认使用第一个连接器（如 Injected）

  return isConnected ? (
    <div>
      <p>已连接：{ensName ?? address}</p>
      <button onClick={() => disconnect()}>断开连接</button>
    </div>
  ) : (
    <button onClick={() => connect({ connector })}>
      连接钱包
    </button>
  )
}
