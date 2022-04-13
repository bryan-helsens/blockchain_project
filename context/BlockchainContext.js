import React, { createContext, useState, useEffect } from 'react'
import { faker } from '@faker-js/faker'
import { useMoralis } from 'react-moralis'

export const BlockchainContext = createContext();

export const BlockchainProvider = ({ children }) => {

    const { isAuthenticated, authenticate, user, logout, Moralis, enableWeb3 } = useMoralis()

    const [accountName, setAccountName] = useState()
    const [currentAccount, setCurrentAccount] = useState()
    const [formattedAccount, setFormattedAccount] = useState()

    useEffect(() => {
        if (!currentAccount) return
        requestToGetCurrentUserInfo(currentAccount);
    }, [currentAccount])

    useEffect(() => {
        if (isAuthenticated){
            const account = user.get('ethAddress');
            const formatAccount = account.slice(0, 7) + '...' + account.slice(35)
            setFormattedAccount(formatAccount)
            setCurrentAccount(account)
        }
    }, [isAuthenticated, enableWeb3])

    useEffect(() => {
        if (!currentAccount) return
        requestToCreateUserOnSanity(currentAccount)
    }, [currentAccount])


    const connectWallet = async () => {
        authenticate()
    }

    const signOut = () => {
        logout();   
    }

    const requestToCreateUserOnSanity = async address => {
        try {
            await fetch('/api/db/createUser', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({
                    walletAddress: address,
                    name: faker.name.findName()
                })
            })

        } catch (error) {
            console.error(error)
        }
    }

    const requestToGetCurrentUserInfo = async walletAddress => {
        try {
            const response = await fetch(`/api/db/getUserInfo?walletAddress=${walletAddress}`,)

            const data = await response.json()
            console.log(data);
            setCurrentAccount(data.data.walletAddress)
            setAccountName(data.data.name)

        } catch (error) {
            console.error(error)
        }
      }


  return (
    <BlockchainContext.Provider value={{
        currentAccount,
        connectWallet,
        formattedAccount,
        signOut,
        isAuthenticated,
        accountName
    }}>
        {children}
    </BlockchainContext.Provider>
  )
}
