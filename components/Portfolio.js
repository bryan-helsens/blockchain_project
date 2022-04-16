import React, { useEffect, useState } from 'react'
import { coins } from '../static/coins'
import Coin from '../components/Coin'
import { useERC20Balances, useMoralisWeb3Api } from 'react-moralis'
import Moralis from 'moralis'
import { Divider } from '@chakra-ui/react'

const styles = {
    wrapper: `flex h-full m-auto w-2/5 bg-black`,
    content: 'w-full pt-4 pl-4 pb-8 pr-8',
    portfolioTable: 'mt-4 border-[1px] border-white',
    tableItem: ' pt-4 pl-8 pb-4 pr-8',
    title: 'text-2xl font-semibold text-white',
    divider: 'border-b-[1px] border-white',
    table: 'w-full',
    tableRow: 'w-full flex justify-between',
    white: 'text-white',
  }

const Portfolio = () => {
    console.log(coins[0].name);

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

            {ethBalance && 
                <>
                    <div className={styles.white}>{ethBalance} <b>ETH</b></div>
                    <Divider />
                    {data && data.map(token => (
                        <div key={token.symbol}>
                            <div className={styles.white}>{Moralis.Units.FromWei(token.balance)} <b>{token.symbol}</b></div>
                            <Divider />
                        </div>
                    ))}
                </>
                
            }

            <div className={styles.portfolioTable}>
                <div className={styles.tableItem}>
                    <div className={styles.title}>Your Assets</div>
                </div>

                <div className={styles.divider}></div>

                <div className={styles.table}>
                    <div className={styles.tableItem}>
                        <div className={styles.tableRow}>
                            <div className={styles.white} style={{ flex: 3 }}>Name</div>
                            <div className={styles.white} style={{ flex: 2 }}>Amount</div>
                            <div className={styles.white} style={{ flex: 2 }}>Balance</div>   
                        </div>
                    </div>

                    <div className={styles.divider}></div>

                    <div>
                        {data && data.map(token => (
                            <div key={token.symbol} className={styles.white}>
                                <Coin coin={token} />
                                <div className={styles.divider}></div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio