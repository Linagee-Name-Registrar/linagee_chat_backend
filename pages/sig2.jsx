import { signIn, useSession } from 'next-auth/react'
import { useAccount, useNetwork, useSignMessage } from 'wagmi'

import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAuthRequestChallengeEvm } from '@moralisweb3/next'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

function Sig2() {
  const { isConnected, address } = useAccount()
  const { chain } = useNetwork()
  const { status } = useSession()
  const { signMessageAsync } = useSignMessage()
  const { push } = useRouter()
  const { requestChallengeAsync } = useAuthRequestChallengeEvm()

  useEffect(() => {
    const handleAuth = async () => {
      const { message } = await requestChallengeAsync({ address: address, chainId: chain.id })

      const signature = await signMessageAsync({ message })

      // redirect user after success authentication to '/user' page

      const { url } = await signIn('moralis-auth', {
        message,
        signature,
        redirect: false,
        callbackUrl: '/user',
      })
      /**
       * instead of using signIn(..., redirect: "/user")
       * we get the url from callback and push it to the router to avoid page refreshing
       */
      push(url)
    }
    if (status === 'unauthenticated' && isConnected) {
      handleAuth()
    }
  }, [status, isConnected])

  return (
    <div className="page">
      <h3>Web3 Authentication</h3>
      <ConnectButton />
    </div>
  )
}

export default Sig2;
