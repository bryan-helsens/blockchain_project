import React, { useEffect, useState } from 'react'
import { coins } from '../static/coins'
import Coin from '../components/Coin'
import { useERC20Balances, useMoralisWeb3Api } from 'react-moralis'
import Moralis from 'moralis'
import TransferModal from '../components/TransferModal'

const styles = {
    wrapper: `flex h-full w-full m-auto bg-black`,
    content: 'w-full pt-4 pl-4 pb-8 pr-8',
    portfolioTable: 'mt-4 border-[1px] border-white',
    tableItem: ' pt-4 pl-8 pb-4 pr-8',
    title: 'text-2xl font-semibold text-white',
    divider: 'border-b-[1px] border-white',
    table: 'w-full',
    tableRow: 'w-full flex justify-between',
    white: 'text-white',
  }

const Portfolio = ({coins}) => {

    const Web3Api = useMoralisWeb3Api();
    const {fetchERC20Balances, data} = useERC20Balances()

    const [ethBalance, setEtherBalance] = useState(0)

    const fetchNativeBalance = async () => {
        const result = await Web3Api.account.getNativeBalance({
            chain: 'rinkeby',
            address: '0x11405e115110810d770EFDf8376A83B0B24DCdeE'
        }).catch(e => console.error(e));

        console.log(result);

        if (result){
            setEtherBalance(Moralis.Units.FromWei(result.balance))
        }
    }

    useEffect(() => {
        fetchNativeBalance()
        fetchERC20Balances({
            params: {
                chain: 'rinkeby',
                address: '0x11405e115110810d770EFDf8376A83B0B24DCdeE',
            }
        })
    },[])

  return (
    <div className={styles.wrapper}>
        <div className={styles.content}>
            <TransferModal />
        
        </div>
    </div>
  )
}

export default Portfolio
