import React, { createContext, useState, useEffect } from 'react'
import { faker } from '@faker-js/faker'

export const BlockchainContext = createContext();

export const BlockchainProvider = ({ children }) => {
    const [currentAccount, setCurrentAccount] = useState()
    const [formattedUser, setFormattedUser] = useState()
    const [currentUser, setCurrentUser] = useState([])

    useEffect(() => {
        checkIfWalletIsConnected()
    }, [])

    useEffect(() => {
        if (!currentAccount) return
        requestToGetCurrentUserInfo(currentAccount);
    }, [currentAccount])


    const connectWallet = async () => {
        if (!window.ethereum) return

        try {
            const addressArray = await window.ethereum.request({
                method: 'eth_requestAccounts'
            })

            if (addressArray.length > 0) {
                const formattedUser = addressArray[0].slice(0, 7) + '...' + addressArray[0].slice(35)
                setCurrentAccount(addressArray[0])
                setFormattedUser(formattedUser)
                requestToCreateUserOnSanity(addressArray[0])
            }

        } catch (error) {
            console.error(error)
        }
    }

    const checkIfWalletIsConnected = async () => {
        if (!window.ethereum) return

        try {
            
            const addressArray = await window.ethereum.request({
                method: 'eth_accounts',
            })

            if (addressArray.length > 0){
                const formattedUser = addressArray[0].slice(0, 7) + '...' + addressArray[0].slice(35)
                setCurrentAccount(addressArray[0])
                setFormattedUser(formattedUser)
                requestToCreateUserOnSanity(addressArray[0])
            }

        } catch (error) {
            console.error(error)
        }
    }

    const requestToCreateUserOnSanity = async address => {
        if (!window.ethereum) return

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
            setCurrentUser(data.data)

        } catch (error) {
            console.error(error)
        }
      }


  return (
    <BlockchainContext.Provider value={{
        currentAccount,
        currentUser,
        connectWallet,
        formattedUser,
    }}>
        {children}
    </BlockchainContext.Provider>
  )
}
