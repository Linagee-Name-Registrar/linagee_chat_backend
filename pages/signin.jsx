import { signIn, useSession } from 'next-auth/react'
import { useAccount, useNetwork, useSignMessage, useDisconnect } from 'wagmi'

import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAuthRequestChallengeEvm } from '@moralisweb3/next'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic';

function Signin() {
  const { isConnected, address } = useAccount()
  const { chain } = useNetwork()
  const { status } = useSession()
  const { signMessageAsync } = useSignMessage()
  const { push } = useRouter()
  const { requestChallengeAsync } = useAuthRequestChallengeEvm()
  const { disconnect } = useDisconnect();
  const router = useRouter();

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
    if (status === 'authenticated' && isConnected) {
      router.push('/user')
    }
  }, [status, isConnected])

  return (
    <div className="page">
      <div className="container">
        <div className="auth">
      <h3>Web3 Authentication</h3>
      <div className="conbutton">
      <ConnectButton chainStatus="none" showBalance={false} />

      </div>
      </div>
      </div>
    </div>
  )
}

export default Signin;
